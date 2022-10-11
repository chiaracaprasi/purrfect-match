#!/usr/bin/python3
"""
create a variable app, instance of Flask
"""
from app.views import app_views
from flask import Flask
from flask_cors import CORS
from models import storage

app = Flask(__name__)
cors = CORS(app, resources={r"/app/*": {"origins": "0.0.0.0"}})
app.register_blueprint(app_views)


@app.teardown_appcontext
def teardown_db(exception=None):
    """remove the current SQLAlchemy Session"""
    storage.close()


@app.errorhandler(404)
def invalid_route(e):
    print("went straight to error")
    return {"error": "NO GOOD"}, 404


@app.route('/', strict_slashes=False)
def test_hello():
    """return a quicky howdy"""
    return "howdy there"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", threaded=True, debug=True)
