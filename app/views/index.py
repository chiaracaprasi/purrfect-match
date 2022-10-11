#!/usr/bin/python3
"""api end point for route /status"""
from app.views import app_views


@app_views.route('/status')
def status():
    """test status of api"""
    return {'status': 'OK'}
