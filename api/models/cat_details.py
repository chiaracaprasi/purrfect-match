#!/usr/bin/python3
"""
Defines class CatDetails
"""

from datetime import date
from api.models.base_model import Base, BaseModel
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

    @classmethod
    def calculate_age(cls, dob):
        """
        Convert datetime object from a CatPersonality instance
        into an age in years and months in string format
        """
        today = date.today()
        years = today.year - dob.year

        if not years:
            months = today.month - dob.month
            return f"{months}m"

        if today.month < dob.month:
            years -= 1
            months = (12 - dob.month) + today.month
        else:
            months = today.month - dob.month

        if not years:
            months = today.month - dob.month
            return f"{months}m"

        if months:
            return f"{years}yrs and {months}m"

        return f"{years}yrs"
