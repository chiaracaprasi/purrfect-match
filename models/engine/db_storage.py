#!/usr/bin/python3
"""
Contains the class DBStorage
"""

from models.base_model import Base
from models.cat_details import CatDetails
from models.cat_personalities import CatPersonalities
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

classes = {"CatDetails": CatDetails, "CatPersonalities": CatPersonalities}


class DBStorage:
    """
    Interacts with the MySQL database
    """
    __engine = None
    __session = None

    def __init__(self):
        """Instantiate a DBStorage object"""
        self.__engine = create_engine(
            'mysql+mysqldb://root:password@localhost/cats')

    def reload(self):
        """reloads data from the database"""
        Base.metadata.create_all(self.__engine)
        sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(sess_factory)
        self.__session = Session

    def new(self, obj):
        """add an object to the current database session"""
        self.__session.add(obj)

    def save(self):
        """commit all changes of the current database session"""
        self.__session.commit()

    def delete(self, obj=None):
        """delete an object from the current database session"""
        if obj:
            self.__session.delete(obj)

    def close(self):
        """close the session attached to private attribute __session"""
        self.__session.remove()

    def all(self, cls=None):
        """query on the current database session
        return all objects or all objects of a cls, if specified
        """
        new_dict = {}
        for clss in classes:
            if cls is None or cls is classes[clss] or cls is clss:
                objs = self.__session.query(classes[clss]).all()
        return objs

    def match(self, cls, **form_data):
        """
        Query on the current database session to retrieve all cats
        matching the form_data passed in.
        Return all matching cats or an empty array if no matches found
        """
        energy = form_data['energy']
        grooming = form_data['grooming']
        social = form_data['social']

        return self.__session.query(cls).\
            filter(cls.energy <= energy).\
            filter(cls.grooming <= grooming).\
            filter(cls.social <= social).\
            all()

    def get(self, cls, id):
        """retrieve one object with matching id"""
        try:
            if cls is not None:
                objects_list = self.__session.query(cls).all()
                for obj in objects_list:
                    if obj.id == id:
                        return obj
        except Exception:
            return None

    def update(self, obj=None):
        """update an object in current database session"""
        pass
