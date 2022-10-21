#!/usr/bin/python3
from flask import Blueprint

app_views = Blueprint("app_views", __name__, url_prefix="/api")

from api.views.cats import *
from api.views.index import *
