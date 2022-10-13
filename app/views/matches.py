#!/usr/bin/python3
"""api end point for route /cat_matches"""
from app.views import app_views
from flask import abort, jsonify, request
from models.cat_details import CatDetails
from models.cat_personalities import CatPersonalities


def match_bool(cat_list, attr, form_data):
    """
    Compare the boolean attributes for each instance of CatPersonality
    in cat_list with the passed in form_data from body response.
    Return the cat_list without non-matching cats
    """
    if form_data == '0':
        return cat_list
    cat_list[:] = [cat for cat in cat_list if cat[attr] is True]
    return cat_list


def match_scale(cat_list, attr, form_data):
    """
    Compare the scale attributes for each instance of CatPersonality
    in cat_list with the passed in form_data from body response.
    Return the cat_list without cats whose requirements are excess of the
    form_data
    """
    cat_list[:] = [cat for cat in cat_list
                   if int(cat[attr]) <= int(form_data)]
    return cat_list


def match_other_pets(cat_list, attr, form_data):
    """
    Compare the 'other_animals' attribute for each instance of CatPersonality
    in cat_list with the passed in form_data from body response.
    Return the cat_list without cats that are incompatible with form_data
    """
    other_animals = {'0': 'cat', '1': 'dog', '2': 'small'}

    if not form_data:
        return cat_list
    for cat in cat_list:
        for pet in form_data:
            cat_list[:] = [cat for cat in cat_list
                           if other_animals[pet] in cat[attr]]


match_funcs = {
    'indoor': match_bool,
    'children': match_bool,
    'social': match_scale,
    'grooming': match_scale,
    'energy': match_scale,
    'other_animals': match_other_pets
    }


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

    body['other_animals'] = body['otherAnimals']
    body_requirements[2] = 'other_animals'
    print(body_requirements)

    all_personalities = CatPersonalities.all()
    if not all_personalities:
        return {}

    matched_cats = []
    for cat in all_personalities:
        matched_cats.append(cat.to_dict())
    for cat in matched_cats:
        cat['other_animals'] = list(cat['other_animals'])
    for req in body_requirements:
        matched_cats = match_funcs[req](matched_cats, req, body[req])
        if not matched_cats:
            return {}

    matches_dict = {}
    for cat_personality in matched_cats:
        id_key = cat_personality['details_id']
        matches_dict[id_key] = []
        cat_details = CatPersonalities.get(
            cat_personality['details_id']).to_dict()
        if cat_details:
            matches_dict[id_key] += [cat_details, cat_personality]
    return jsonify(matches_dict)
