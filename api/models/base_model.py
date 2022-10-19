#!/usr/bin/python3
"""
Defines class BaseModel
"""

from datetime import datetime
import api.models
from sqlalchemy import Column, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base
import uuid

time = "%Y-%m-%dT%H:%M:%S.%f"
Base = declarative_base()


class BaseModel:
    """
    The base class from which future classes will be derived
    """
    id = Column(Integer, primary_key=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __str__(self):
        """string representation of the BaseModel class"""
        return f"[{self.__class__.__name__:s}] ({self.id}) {self.__dict__}"

    def to_dict(self):
        """returns a dictionary containing all keys and values of the object"""
        new_dict = self.__dict__.copy()
        if "created_at" in new_dict:
            new_dict["created_at"] = new_dict["created_at"].strftime(time)
        new_dict["__class__"] = self.__class__.__name__
        if "_sa_instance_state" in new_dict:
            del new_dict["_sa_instance_state"]
        return new_dict

    @classmethod
    def all(cls):
        """
        obtains all from storage the number of objects of a particular
        class, or all objects if cls is None
        returns a dictionary with keys and objects as values
        """
        return api.models.db.all(cls)
