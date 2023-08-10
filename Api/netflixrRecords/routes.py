from flask import Blueprint, request, abort
from netflixrRecords.models import Records
from scheduler import main
records_blueprint = Blueprint("movie", __name__)
AUTH_TOKEN = "7J3df&yaA4wvfm!d4uxj&8zY2YSR*vwq"


@records_blueprint.route("/", methods=["GET"])
def get_all():
	return Records().get_all()

@records_blueprint.route("/item/<int:id>", methods=["GET"])
def get_item_id(id):
	return Records().get_item_id(id)

@records_blueprint.route("/range_item_age", methods=["GET"])
def get_item_range_by_age():
	return Records().get_item_range_by_age()


@records_blueprint.route("/map_graph", methods=["GET"])
def map_graph():
	return Records().map_graph()


@records_blueprint.route("/line_graph", methods=["GET"])
def line_graph():
	return Records().line_graph()


@records_blueprint.route("/pie_graph", methods=["GET"])
def pie_graph():
	return Records().pie_graph()


@records_blueprint.route("/bar_graph", methods=["GET"])
def bar_graph():
	return Records().bar_graph()


@records_blueprint.route("/column_graph", methods=["GET"])
def column_graph():
	return Records().column_graph()


@records_blueprint.route("/cron", methods=["POST"])
def cron_schedular():
	auth_header = request.headers.get('X-api-key')
	if not auth_header:
		abort(401, "Authorization Token Required")

	if auth_header != AUTH_TOKEN:
		abort(403, "Invalid authorization token")

	main()
	return "Cron Run Completed"
