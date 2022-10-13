#!/usr/bin/python3
"""api end point for route /all_cats"""
from app.views import app_views
from flask import abort, jsonify, request
from models.cat_details import CatDetails
from models.cat_personalities import CatPersonalities


@app_views.route('/all_cats', strict_slashes=False)
def all_cats():
    """
    Retrieve and return all cats from the database
    """

    all_personalities = CatPersonalities.all()
    if not all_personalities:
        return {}

    matches_dict = {}
    for cat_personality in all_personalities:
        cat_personality = cat_personality.to_dict()
        cat_personality['other_animals'] = list(
            cat_personality['other_animals']
            )
        id_key = cat_personality['details_id']
        matches_dict[id_key] = []
        cat_details = CatPersonalities.get(
            cat_personality['details_id']
            ).to_dict()
        if cat_details:
            matches_dict[id_key] += [cat_details, cat_personality]
    return jsonify(matches_dict)
