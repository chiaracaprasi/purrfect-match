#!/usr/bin/python3
"""
Initialises the models package
"""

from .db_storage import DBStorage
db = DBStorage()
db.reload()
