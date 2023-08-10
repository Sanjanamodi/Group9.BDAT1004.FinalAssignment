from flask import current_app as app
from Utils.utility import json_resp
from flask import request

class Records:

  def __init__(self):
    self.defaults = {}

  def get_all(self):
    records = app.db.netflix_records.find({}, {"_id": 0})
    data = []
    for record in records:
      data.append(record)
    res = json_resp({"data": data}, 200)
    return res

  def get_item_id(self, item_id):
    record = app.db.netflix_records.find_one({"user_id": item_id}, {"_id": 0})
    if record is None:
      return json_resp({"error": "Item not found"}, 404)

    return json_resp({"data": record}, 200)

  def get_item_range_by_age(self):
    min_age = request.args.get("min_age", type=int)
    max_age = request.args.get("max_age", type=int)

    if min_age is None or max_age is None:
      return json_resp({"error": "Min and max age parameters are required"}, 400)

    records = app.db.netflix_records.find({"age": {"$gte": min_age, "$lte": max_age}}, {"_id": 0})
    data = list(records)

    return json_resp({"data": data}, 200)
  def map_graph(self):
    try:
      pipeline = [{"$group": {"_id": "$country", "count": {"$sum": 1}}}]
      result = list(app.db.netflix_records.aggregate(pipeline))
      data = []
      for record in result:
        data.append(record)
      res = json_resp({"data": data}, 200)
      return res
    except Exception as ex:
      print("map_graph error:", ex)

  def line_graph(self):
    try:
      pipeline = [
        {
          "$addFields": {
            "joinDateAsDate": {
              "$toDate": {
                "$dateFromString": {
                  "dateString": "$join_date",
                  "format": "%d-%m-%Y"
                }
              }
            }
          }
        },
        {
          "$group": {
            "_id": {"$year": {"date": "$joinDateAsDate", "timezone": "UTC"}},
            "count": {"$sum": 1}
          }
        },
        {
          "$sort": {"_id": 1}  # 1 for ascending order
        },
        {
          "$project": {
            "_id": 0,
            "Year": "$_id",
            "count": 1
          }
        }
      ]
      result = list(app.db.netflix_records.aggregate(pipeline))
      data = []
      for record in result:
        data.append(record)
      res = json_resp({"data": data}, 200)
      return res
    except Exception as ex:
      print("line_graph error:", ex)

  def pie_graph(self):
    try:
      pipeline = [
        {
          "$group": {
            "_id": "$device",
            "count": {"$sum": 1}
          }
        },
        {
          "$project": {
            "_id": 0,
            "device": "$_id",
            "count": 1
          }
        }
      ]
      result = list(app.db.netflix_records.aggregate(pipeline))
      data = []
      for record in result:
        data.append(record)
      res = json_resp({"data": data}, 200)
      return res
    except Exception as ex:
      print("pie_graph error:", ex)

  def bar_graph(self):
    try:
      pipeline = [
        {
          "$group": {
            "_id": {
              "gender": "$gender",
              "country": "$country"
            },
            "count": {"$sum": 1}
          }
        },
        {
          "$project": {
            "_id": 0,
            "gender": "$_id.gender",
            "country": "$_id.country",
            "count": 1
          }
        },
        {
          "$group": {
            "_id": "$country",
            "gender_counts": {
              "$push": {
                "gender": "$gender",
                "count": "$count"
              }
            }
          }
        },
        {
          "$project": {
            "_id": 0,
            "country": "$_id",
            "gender_counts": 1
          }
        }
      ]
      result = list(app.db.netflix_records.aggregate(pipeline))
      data = []
      for record in result:
        data.append(record)
      res = json_resp({"data": data}, 200)
      return res
    except Exception as ex:
      print("bar_graph error:", ex)

  def column_graph(self):
    try:
      pipeline = [
        {
          "$addFields": {
            "lastPaymentDateAsDate": {
              "$toDate": {
                "$dateFromString": {
                  "dateString": "$last_payment_date",
                  "format": "%d-%m-%Y"
                }
              }
            }
          }
        },
        {
          "$group": {
            "_id": {"month": {"$month": {"date": "$lastPaymentDateAsDate", "timezone": "UTC"}},
                    "year": {"$year": {"date": "$lastPaymentDateAsDate", "timezone": "UTC"}}},
            "count": {"$sum": 1}
          }
        },
        {
          "$project": {
            "_id": 0,
            "month": "$_id.month",
            "year": "$_id.year",
            "count": 1
          }
        }
      ]
      result = list(app.db.netflix_records.aggregate(pipeline))
      data = []
      for record in result:
        data.append(record)
      res = json_resp({"data": data}, 200)
      return res
    except Exception as ex:
      print("column_graph error:", ex)
