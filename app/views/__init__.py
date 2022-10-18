#!/usr/bin/python3
from flask import Blueprint

app_views = Blueprint("app_views", __name__, url_prefix="/app")

from app.views.cats import *
from app.views.index import *
