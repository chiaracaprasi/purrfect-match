#!/usr/bin/python3
"""api end point for route /cat_matches"""
from app.views import app_views
from flask import abort, jsonify, request
from models.cat_details import CatDetails
from models.cat_personalities import CatPersonalities


@staticmethod
def check_match(cat_data, form_data):
    """
    compares form data provided in body request with CatPersonality
    instance attribute. Returns True if matching, else False
    """
    if cat_data == form_data:
        return True
    return False


@app_views.route('/cat_matches', methods=['GET'], strict_slashes=False)
def match_cats():
    """
    compare cats retrieved from storage with form data provided in request.
    Return all cats exactly matching the criteria provided or an empty
    dictionary if no matches found
    """
    body = request.get_json()
    if not body:
        abort(400, description="Not a json")

    body_requirements = ['indoor', 'children', 'otherAnimals',
                         'grooming', 'energy', 'social']
    for req in body_requirements:
        if req not in body:
            abort(400, description=f"Missing {req}")

    all_personalities = CatPersonalities.all()
    if not all_personalities:
        return {}

    matched_cats = []
    for cat in all_personalities:
        matched_cats.append(cat)
    for req in body_requirements:
        if req != 'otherAnimals' and matched_cats is not None:
            matched_cats[:] = [cat for cat in matched_cats if
                               check_match(cat[req], body[req])]

    # deal with otherAnimals, once I understand what I'm getting from
    # frontend and what sqlalchemy is returning

    matches_dict = {}
    for cat_personality in matched_cats:
        id_key = str(cat_personality['details_id'])
        matches_dict[id_key] = []
        cat_details = CatPersonalities.get(cat_personality['details_id'])
        if cat_details:
            matches_dict[id_key] += [cat_details, cat_personality]
    return jsonify(matches_dict)
