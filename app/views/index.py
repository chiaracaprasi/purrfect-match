#!/usr/bin/python3
"""api end point for route /status"""
from app.views import app_views


@app_views.route('/status', methods=['GET'], strict_slashes=False)
def status():
    """test status of api"""
    return {'status': 'OK'}


@app_views.route('/hello', methods=['GET'], strict_slashes=False)
def hello():
    """sends a quick howdy"""
    return "hello there cat-lover"
