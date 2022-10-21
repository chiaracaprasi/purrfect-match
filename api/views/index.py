#!/usr/bin/python3
"""api end point for route /status"""
from api.views import app_views


@app_views.route('/api/status', methods=['GET'], strict_slashes=False)
def status():
    """test status of api"""
    return {'status': 'OK'}
