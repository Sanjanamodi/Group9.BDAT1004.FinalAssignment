# Group9.BDAT1004.FinalAssignment

#### Team Members

- **Sanjana Manish Modi**
- **Reedham Jitendrakumar Patel**
- **Sizamayeen Saiyadmiya Kadri**
- **Brijkumar Patel**


## Description
This repository contains two main folders: App and Api, each with its respective codebase for deploying a React web application and a Python Flask API using Google App Engine. The deployment configurations for both components are managed using `app.yaml` files in each folder, allowing for seamless deployment to the Google App Engine platform.

### Library used for project
- [x] Flask Api for Python 
- [x] Kaggle Dataset
- [x] React for frontend
- [x] React Google Charts

### Deployment Infrastructure
For Deployment we have used Google app engine.
Google App Engine is a fully managed Platform as a Service (PaaS) that simplifies application deployment. It enables developers to build, deploy, and scale web applications without managing the underlying infrastructure. With automatic scaling, multiple language support, and seamless integration with Google Cloud services, App Engine streamlines development and allows a focus on code rather than infrastructure concerns.

### Steps to run Api in local

1) Navigate to Api folder
2) Create Virtual Environment [Python venv link](https://docs.python.org/3/library/venv.html#:~:text=A%20virtual%20environment%20is%20created,the%20virtual%20environment%20are%20avail).

> [!IMPORTANT]
> Add your MongoDB connection string & kaggle config which is mandotary to run this api's

4) Run below command in terminal
```
pip install -r requirements.txt
python .\main.py
```
 
### Steps to run App in local

1) Navigate to App folder
> [!IMPORTANT]
> Your machine should have node.js install.

2) Run below command in terminal
```
npm install
npm start
```

### Api Routes
Postman Collection added in repository and below is the link of collection
[Api Postman Collection](https://github.com/Sanjanamodi/Group9.BDAT1004.FinalAssignment/blob/main/FlaskApi%20Production.postman_collection.json)
