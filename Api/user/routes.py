from flask import Blueprint
from user.models import User

user_blueprint = Blueprint("user", __name__)


@user_blueprint.route("/", methods=["GET"])
def get_all():
	return User().get_all()
