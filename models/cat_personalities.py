#!/usr/bin/python3
"""
Defines class CatPersonalities
"""

import models
from models.base_model import Base, BaseModel
from models.cat_details import CatDetails
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

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    @classmethod
    def get(cls, id):
        """
        retrieves a CatDetails object from storage if matching id
        is found. Returns object or None if no match found
        """
        return models.storage.get(CatDetails, id)
