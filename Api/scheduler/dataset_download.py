import os
import glob
from urllib.parse import quote
os.environ['KAGGLE_CONFIG_DIR'] = os.path.dirname(os.path.abspath(__file__))
import pandas as pd
from kaggle.api.kaggle_api_extended import KaggleApi
data_folder_path = os.path.dirname(os.path.abspath(__file__))


def connect_and_download_dataset():
    try:
        dataset_name = 'arnavsmayan/netflix-userbase-dataset'
        file_name = 'Netflix Userbase.csv'
        #temp_file_path = '/tmp/' + quote(file_name)
        temp_file_path = os.path.join(data_folder_path, quote(file_name))
        api = KaggleApi()
        api.authenticate()
        #api.dataset_download_file(dataset_name, file_name, path='/tmp')
        api.dataset_download_file(dataset_name, file_name, path=data_folder_path)
        json_data = read_and_parse_json(temp_file_path)
        return json_data
    except Exception as ex:
        print("Dataset Download error:", ex)


def read_and_parse_json(file):
    data = pd.read_csv(file)
    df = pd.DataFrame(data)
    # Rename col to avoid key mismatch
    df.rename(columns=lambda x: x.strip().lower().replace(' ', '_'), inplace=True)
    data_list = df.to_dict(orient='records')
    return data_list


# Use below function when require
def get_files_by_extension(folder_path, file_extension):
    search_pattern = os.path.join(folder_path, f"*.{file_extension}")
    file_names = glob.glob(search_pattern)
    return file_names
