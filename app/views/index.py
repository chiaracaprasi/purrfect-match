#!/usr/bin/python3
"""api end point for route /status"""
from app.views import app_views
from flask import jsonify
from models.cat_details import CatDetails
from models.cat_personalities import CatPersonalities


@app_views.route('/status', methods=['GET'], strict_slashes=False)
def status():
    """test status of api"""
    return {'status': 'OK'}


def test_check_match(form_data, cat_data):
    """tests whether form data string is present in
    cat_data array"""
    if form_data not in cat_data:
        return False
    return True


@app_views.route('/test_matching', strict_slashes=False)
def test_matches():
    """tests matching algorithm"""
    fake_form = {
        'indoor': False,
        'children': False,
        'otherAnimals': [],
        'grooming': '1',
        'energy': '2',
        'social': '1'
    }
    other_animals = {'0': 'cat', '1': 'dog', '2': 'small'}

    all_personalities = CatPersonalities.all()
    if not all_personalities:
        return {}

    matched_cats = []
    for cat in all_personalities:
        matched_cats.append(cat.to_dict())
    for cat in matched_cats:
        cat['other_animals'] = list(cat['other_animals'])
    for data in fake_form:
        if data != 'otherAnimals' and matched_cats is not None:
            print("REDUCING CATS")
            matched_cats[:] = [cat for cat in matched_cats
                               if cat[data] == fake_form[data]]
            print(matched_cats)
    if fake_form['otherAnimals']:
        for cat in matched_cats:
            for pet in fake_form['otherAnimals']:
                matched_cats[:] = [cat for cat in matched_cats
                                   if test_check_match(
                                    pet, cat['other_animals']
                                   )]

    matches_dict = {}
    for cat_personality in matched_cats:
        print('matching details to personality')
        id_key = cat_personality['details_id']
        matches_dict[id_key] = []
        cat_details = CatPersonalities.get(id_key)
        if cat_details:
            matches_dict[id_key] += [cat_details.to_dict(), cat_personality]
    return jsonify(matches_dict)
