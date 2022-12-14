#!/usr/bin/python3
"""api end points for routes /cats/match and /cats/all"""
from api.models.cat_details import CatDetails
from api.models.cat_personalities import CatPersonalities
from api.views import app_views
from flask import abort, jsonify, request


@app_views.route('/cats/all', strict_slashes=False)
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
            cat_personality['other_animals'])
        id_key = cat_personality['details_id']
        matches_dict[id_key] = []
        cat_details = CatPersonalities.get_cat_details(
            cat_personality['details_id'])
        if cat_details:
            cat_details = cat_details.to_dict()
            cat_details['age'] = CatDetails.calculate_age(cat_details['dob'])
            matches_dict[id_key] += [cat_details, cat_personality]
    return jsonify(matches_dict)


@app_views.route('/cats/match', methods=['GET', 'POST'], strict_slashes=False)
def match_cats():
    """
    compare cats retrieved from storage with form data provided in request.
    Return all cats exactly matching the criteria provided or an empty
    dictionary if no matches found
    """
    if request.method == 'POST':
        body = request.get_json()
        if not body:
            abort(400, description="Not a json")
    else:
        body = {
            'indoor': '0',
            'children': '1',
            'grooming': '2',
            'social': '2',
            'energy': '1',
            'otherAnimals': [0, 1]
        }

    body_requirements = ['indoor', 'children', 'otherAnimals',
                         'grooming', 'energy', 'social']

    for req in body_requirements:
        if req not in body:
            abort(400, description=f"Missing {req}")

    if body['otherAnimals']:
        body['other_animals'] = list(body['otherAnimals'])
    del body['otherAnimals']
    if body['children'] == '0':
        del body['children']
    if body['indoor'] == '0':
        del body['indoor']

    matched_personalities = CatPersonalities.match(body)
    if not matched_personalities:
        return {}

    matched_cats = {}
    for cat_personality in matched_personalities:
        id_key = cat_personality['details_id']
        matched_cats[id_key] = []
        cat_details = CatPersonalities.get_cat_details(
            cat_personality['details_id'])
        if cat_details:
            cat_details = cat_details.to_dict()
            cat_details['age'] = CatDetails.calculate_age(cat_details['dob'])
            matched_cats[id_key] += [cat_details, cat_personality]
    return jsonify(matched_cats)
