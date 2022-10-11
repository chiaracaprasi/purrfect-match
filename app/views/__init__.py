#!/usr/bin/python3
from flask import Blueprint

app_views = Blueprint("app_views", __name__, url_prefix="/app")

from app.views.matches import *
from app.views.all_cats import *
