from flask import Flask, jsonify, request, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin



app = Flask(__name__, static_url_path='', static_folder='frontend/build')
app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:root@localhost/pobblebonk'

#app.config['SQLALCHEMY_DATABASE_URI']='mysql://b329e680cfc484:a310abca@us-cdbr-east-04.cleardb.com/heroku_8caeb1ebf4606b6'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Emails(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(120), unique=True) 
    ighandle = db.Column(db.String(120)) 


    def __init__(self, email):
        self.email = email

class EmailsSchema(ma.Schema):
    class Meta:
        fields = ('id','email')

class IGHandles(db.Model):
    __tablename__ = 'IGHandles'
    id = db.Column(db.Integer, primary_key = True)
    ighandle = db.Column(db.String(120)) 

    def __init__(self, ighandle):
        self.ighandle = ighandle

class IGHandlesSchema(ma.Schema):
    class Meta:
        fields = ('id','ighandle')



email_schema = EmailsSchema()
emails_schema = EmailsSchema(many=True)

ighandle_schema = IGHandlesSchema()
ighandles_schema = IGHandlesSchema(many=True)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/get', methods = ['GET'])
def get_emails():
    all_emails = Emails.query.all()
    results = emails_schema.dump(all_emails)
    return jsonify(results)

@app.route('/get/<id>', methods = ['GET'])
def post_emails(id):
    results = Emails.query.get(id)
    return email_schema.jsonify(results)

@app.route('/add', methods = ['POST'])
def add_email2():
    print(email)
    email = request.json['email']
    print('add email python')
    entry = Emails(email)
    db.session.add(entry)
    db.session.commit()
    return email_schema.jsonify(entry)

@app.route('/getig', methods = ['GET'])
def get_ighandles():
    all_ighandles = IGHandles.query.all()
    results = ighandles_schema.dump(all_ighandles)
    #response.headers.add("Access-Control-Allow-Origin","*")
    return jsonify(results)

@app.route('/addig', methods = ['POST'])
def add_ighandles():
    ighandle = request.json['ighandle']
    entry = IGHandles(ighandle)
    db.session.add(entry)
    db.session.commit()
    #response.headers.add("Access-Control-Allow-Origin","*")
    return ighandle_schema.jsonify(entry)




if __name__ == "__main__":
    app.run(debug=True)
