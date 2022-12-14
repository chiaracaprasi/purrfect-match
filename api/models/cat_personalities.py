#!/usr/bin/python3
"""
Defines class CatPersonalities
"""

import api.models
from .base_model import Base, BaseModel
from .cat_details import CatDetails
from sqlalchemy import Boolean, Column, Enum, ForeignKey, Integer
from sqlalchemy.dialects.mysql import SET


class CatPersonalities(BaseModel, Base):
    """class definition for CatPersonalities"""
    __tablename__ = 'cat_personalities'
    grooming = Column(Enum('1', '2', '3',
                           name='grooming_enum'), nullable=False)
    energy = Column(Enum('1', '2', '3', name='energy_enum'), nullable=False)
    social = Column(Enum('1', '2', '3', name='social_enum'), nullable=False)
    other_animals = Column(SET('none', 'cat', 'dog', 'rabbit'), nullable=False)
    children = Column(Boolean, nullable=False, default=False)
    indoor = Column(Boolean, nullable=False, default=True)
    details_id = Column(Integer, ForeignKey('cat_details.id'), nullable=False)

    @staticmethod
    def match_bool(cat_list, attr, form_data):
        """
        Compare the boolean attributes for each instance of CatPersonality
        in cat_list with the passed in form_data.
        Return cat_list after removing cats that don't match
        """
        if form_data == '0':
            return cat_list
        cat_list[:] = [cat for cat in cat_list if cat[attr] is True]
        return cat_list

    @staticmethod
    def match_other_pets(cat_list, attr, form_data):
        """
        Compare the 'other_animals' attribute for each instance of
        CatPersonality in cat_list with the passed in form_data from
        body response.
        Return the cat_list without cats that are incompatible with form_data
        """
        other_animals = {0: 'cat', 1: 'dog', 2: 'small'}

        if not form_data:
            return cat_list
        for cat in cat_list:
            for pet in form_data:
                cat_list[:] = [cat for cat in cat_list
                               if other_animals[pet] in cat[attr]]
        return cat_list

    match_funcs = {
            'indoor': match_bool.__func__,
            'children': match_bool.__func__,
            'other_animals': match_other_pets.__func__
            }

    @classmethod
    def match(cls, form_data):
        """
        Query the database to retrieve cats matching form_data keys:
        energy, grooming and social.
        Filter query results (if any) based on form_data keys:
        children, indoor and other_animals
        Return an array of matching CatPersonality objects or an empty array
        """
        # query db for cats matching energy, grooming and social requirements
        results = api.models.db.match(cls, form_data)
        if not results:
            return []

        cat_list = []
        for cat in results:
            cat = cat.to_dict()
            cat['other_animals'] = list(cat['other_animals'])
            cat_list.append(cat)

        # filter out cats that don't match indoor, children and other_animals
        # requirements
        for key in form_data:
            if key in cls.match_funcs:
                if cat_list:
                    cat_list = cls.match_funcs[key](
                        cat_list, key, form_data[key])
                else:
                    return []
        return cat_list

    @classmethod
    def get_cat_details(cls, id):
        """
        retrieves a CatDetails object from storage if matching id
        is found. Returns object or None if no match found
        """
        return api.models.db.get(CatDetails, id)
