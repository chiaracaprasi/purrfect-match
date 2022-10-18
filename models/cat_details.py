#!/usr/bin/python3
"""
Defines class CatDetails
"""

from datetime import date
from models.base_model import Base, BaseModel
from sqlalchemy import Column, Date, Enum, String
from sqlalchemy.dialects.mysql import MEDIUMTEXT


class CatDetails(BaseModel, Base):
    """class definition for CatDetails"""
    __tablename__ = 'cat_details'
    name = Column(String(50), nullable=False)
    dob = Column(Date, default=date(2000, 1, 1), nullable=False)
    sex = Column(Enum('Female', 'Male', name='gender_enum'), nullable=False)
    breed = Column(String(50), nullable=False)
    photo = Column(String(500), nullable=False)
    blurb = Column(MEDIUMTEXT(), nullable=False)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def calculate_age(self, dob):
        """
        Convert datetime object from a CatPersonality instance
        into an age in years and months in string format
        """
        today = date.today()
        years = today.year - dob.year

        if not years:
            months = today.month - dob.month
            if months > 1:
                return f"{months} months"
            return f"{months} month"

        if today.month < dob.month:
            years -= 1
            months = dob.month - today.month
        else:
            months = today.month - dob.month

        if not years:
            months = today.month - dob.month
            if months > 1:
                return f"{months} months"
            return f"{months} month"

        if months:
            if years > 1 and months > 1:
                return f"{years} years and {months} months"
            if years > 1:
                return f"{years} years and {months} month"
            if months > 1:
                return f"{years} year and {months} months"
            return f"{years} year and {months} month"

        return f"{years} years"
