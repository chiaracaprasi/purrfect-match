#!/usr/bin/python3
"""
create a variable app, instance of Flask
"""
from api.models import db
from api.views import app_views
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
# cors = CORS(app, resources={r"/app/*": {"origins": "0.0.0.0"}})
app.register_blueprint(app_views)


@app.teardown_appcontext
def teardown_db(exception=None):
    """remove the current SQLAlchemy Session"""
    db.close()


@app.errorhandler(404)
def invalid_route(e):
    return {"error": "NO GOOD"}, 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", threaded=True, debug=True)
