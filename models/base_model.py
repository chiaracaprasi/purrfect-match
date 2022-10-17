#!/usr/bin/python3
"""
Defines class BaseModel
"""

from datetime import datetime
import models
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

    def __init__(self, **kwargs):
        """Instantiation of the BaseModel"""
        if kwargs:
            for key, value in kwargs.items():
                if key != "__class__":
                    setattr(self, key, value)
            if kwargs.get("created_at", None) and type(self.created_at) is str:
                self.created_at = datetime.strptime(kwargs["created_at"], time)
            else:
                self.created_at = datetime.utcnow()
            if kwargs.get("id", None) is None:
                self.id = str(uuid.uuid4())
        else:
            self.id = str(uuid.uuid4())
            self.created_at = datetime.utcnow()

    def save(self):
        """adds a new instance or saves changes to an existing
        instance to current database session
        """
        models.storage.new(self)
        models.storage.save()

    def delete(self):
        """delete an instance from the current database session"""
        storage.delete(self)

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
        return models.storage.all(cls)
