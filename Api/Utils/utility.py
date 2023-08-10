from flask import Response
from bson import json_util
import json


def json_resp(data, status):
    return Response(json.dumps(data, default=json_util.default), mimetype="application/json", status=status)
