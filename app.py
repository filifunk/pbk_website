from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:root@localhost/pobblebonk'

app.config['SQLALCHEMY_DATABASE_URI']='mysql://b329e680cfc484:a310abca@us-cdbr-east-04.cleardb.com/heroku_8caeb1ebf4606b6'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Emails(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(120)) 

    def __init__(self, email):
        self.email = email

class EmailsSchema(ma.Schema):
    class Meta:
        fields = ('id','email')


email_schema = EmailsSchema()
emails_schema = EmailsSchema(many=True)


@app.route('/get', methods = ['GET'])
def get_emails():
    all_emails = Emails.query.all()
    results = emails_schema.dump(all_emails)
    return jsonify(results)

@app.route('/get/<id>', methods = ['GET'])
def post_emails(id):
    results = Emails.query.get(id)
    return email_schema.jsonify(results)


#@app.route('/', methods = ['POST'])
#def add_email():
    #email = request.json['email']

    #entry = Emails(email)
    #db.session.add(entry)
    #db.session.commit()
    #return email_schema.jsonify(entry)

@app.route('/add', methods = ['POST'])
def add_email2():
    email = request.json['email']

    entry = Emails(email)
    db.session.add(entry)
    db.session.commit()
    return email_schema.jsonify(entry)




if __name__ == "__main__":
    app.run(debug=True)
