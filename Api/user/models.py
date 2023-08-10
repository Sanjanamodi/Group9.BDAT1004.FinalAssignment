from flask import current_app as app
from Utils.utility import json_resp


class User:

  def __init__(self):
    self.defaults = {}
  
  def get_all(self):
    users = app.db.users.find({}, {"_id":0})
    data = []
    for user in users:
      data.append(user)
    res = json_resp({"data": data}, 200)
    return res