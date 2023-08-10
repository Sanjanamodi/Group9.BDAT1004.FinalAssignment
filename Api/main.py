from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from Utils.utility import json_resp
from user.routes import user_blueprint
from netflixrRecords.routes import records_blueprint

app = Flask(__name__)
app.config.from_pyfile("config/config.cfg")
CORS(app, resources={r"/*": {"origins": "*"}})
# Database Config
try:
    print("Connecting database.....")
    client = MongoClient(app.config["MONGO_URI"])
    app.db = client[app.config["MONGO_DATABASE"]]
    print("Connection Successful.....")
except Exception as e:
    print("Exception seen: " + str(e))

# Register Blueprints
app.register_blueprint(user_blueprint, url_prefix="/user")
app.register_blueprint(records_blueprint, url_prefix="/movie")


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/ping")
def hello_test():
    return json_resp({"status": "Online"}, 200)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080)

