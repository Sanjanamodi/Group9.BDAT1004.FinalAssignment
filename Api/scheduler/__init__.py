from flask import current_app as app
from pymongo.errors import BulkWriteError
from pymongo import UpdateOne
from scheduler.dataset_download import connect_and_download_dataset


def insert_multiple_records(app, payload=[]):
    if len(payload) > 0:
        bulk_operations = [UpdateOne({'user_id': record['user_id']},
                                   {'$set': record}, upsert=True) for record in payload]
        try:
            result = app.db.netflix_records.bulk_write(bulk_operations)
            print(f"Inserted: {result.upserted_count} documents | Updated: {result.modified_count} documents")
        except BulkWriteError as bwe:
            print("Bulk write error occurred:", bwe.details)
    else:
      print("Empty records in payload")


def main():
    print("Running Scheduling process......")
    payload = connect_and_download_dataset()
    insert_multiple_records(app, payload)
    print("Scheduling Process complete...")

