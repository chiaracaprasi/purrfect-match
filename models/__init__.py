#!/usr/bin/python3
"""
Initialises the models package
"""

from models.engine.db_storage import DBStorage
db = DBStorage()
db.reload()
