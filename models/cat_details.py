#!/usr/bin/python3
"""
Defines class CatDetails
"""

from datetime import date
from models.base_model import Base, BaseModel
from sqlalchemy import Boolean, Column, Date, Enum, String
from sqlalchemy.dialects.mysql import MEDIUMTEXT, SET


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
