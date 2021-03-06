import time
import json
import os

from flask import Flask, send_from_directory, redirect
from urllib.parse import quote_plus
from flask_sqlalchemy import SQLAlchemy
from flask import request, jsonify
from flask_migrate import Migrate
from flask_login import login_user, logout_user, current_user, login_required
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity, JWTManager
from flask_cors import CORS, cross_origin
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_restful import Api, Resource, reqparse
import pathlib

app = Flask(__name__, static_url_path='', static_folder='../build')
api = Api(app)

parentpath = pathlib.Path().resolve() 
#app.config['UPLOAD_FOLDER'] = "../public/images/post-images/"
app.config['UPLOAD_FOLDER'] = str(parentpath) + "/build/images/post-images"
#app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://jhcadmin:keke123@localhost/jhcdb"
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://vrkqhsnowowmty:2e80b0955b54cd39ebfc779dd22fdd891cd169ae1dc9893025836fcf92c24090@ec2-18-214-238-28.compute-1.amazonaws.com:5432/de1r5mu0ivn96p"
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
app.config['SECRET_KEY'] = "some$3cretKey"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

app.config['GMAIL_PASSWORD'] = "@0813keke" #change this
app.config['GMAIL_PORT'] = 465 
app.config['GMAIL_SERVER'] = "smtp.gmail.com" 
app.config['GMAIL_SENDER'] = "webjhcnig@gmail.com"  #change this
app.config['GMAIL_JHC'] = "webjhcnig@gmail.com"  #change this
app.url_map.strict_slashes = False

jwt = JWTManager(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app, headers='Content-Type')
#app.config['CORS_HEADERS'] = 'Content-Type'

#change
text = """\

This is email was sent from the Jamaican High Commission in Nigeria Website. 
Visit url for more information or call 0813 606 3356.

"""

#change
EmailTemp = """\
    <html>
        <body style="background-color:white;padding:1rem;color:black">
            <div style="text-align:center;background-color:yellow">
                <h1 style="color:black;font-family:Georgia"> This email was a message sent from the Jamaican High Commission in Abuja, Nigeria Website </h1>
            </div>
            
            <br>
            
            <div style="background-color:green;padding:1rem">
                <b style="color:white;text-decoration:underline"> Name of Sender </b>
                <div style="padding-inline:1rem;font-style:italic">
                    {0}
                </div>
            </div>
            
            <br>
            
            <div style="background-color:green;padding:1rem">
                <b style="color:white;text-decoration:underline"> Email of Sender </b>
                <div style="padding-inline:1rem;font-style:italic">
                    {1}
                </div>
            </div>
             
            <br>
            
            <div style="background-color:green;padding:1rem">
                <b style="color:white;text-decoration:underline"> Nationality of Sender </b>
                <div style="padding-inline:1rem;font-style:italic">
                    {2}
                </div>
            </div>

            <br>

            <div style="background-color:green;padding:1rem">
                <b style="color:white;text-decoration:underline"> Subject of Sender </b>
                <div style="padding-inline:1rem;font-style:italic">
                    {3}
                </div>
            </div>

            <br>

            <div style="background-color:green;padding:1rem">
                <b style="color:white;text-decoration:underline"> Message of Sender </b>
                <div style="padding-inline:1rem;font-style:italic">
                    {4}
                </div>
            </div>

            <br>

            <div style="background-color:black;color:white;text-align:center;padding:1rem">
                <hr style="border-color:yellow" /> 
                    <small> Copyright &copy; 2022. </small>
                <hr style="border-color:yellow" /> 
            </div>
        </body>
    </html>
    """

plainEmail = MIMEText(text, "plain")

def sendEmail(sendTo, subject, emailTemp):
    message = MIMEMultipart("alternative")
    message["Subject"] = subject
    message["From"] = app.config['GMAIL_JHC']  
    message["To"] = sendTo

    message.attach(plainEmail)
    message.attach(emailTemp)

    context = ssl.create_default_context() 
    with smtplib.SMTP_SSL(app.config['GMAIL_SERVER'], app.config['GMAIL_PORT'], context=context) as server:
        server.login(app.config['GMAIL_SENDER'], app.config['GMAIL_PASSWORD'])
        server.sendmail(app.config['GMAIL_SENDER'], sendTo , message.as_string())

class User(db.Model):
    # You can use this to change the table name. The default convention is to use
    # the class name. In this case a class name of UserProfile would create a
    # user_profile (singular) table, but if we specify __tablename__ we can change it
    # to `user_profiles` or some other name.
    __tablename__ = 'jhc_users'

    id = db.Column(db.Integer, db.Sequence('jhc_users_id_seq'), primary_key=True)
    first_name = db.Column(db.String(80))
    last_name = db.Column(db.String(80))
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    is_admin = db.Column(db.Boolean)

    #userType ex: admin,client,artist
    #dateAdded

    def __init__(self, first_name, last_name, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = generate_password_hash(password, method='pbkdf2:sha256')

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        try:
            return unicode(self.id)  # python 2 support
        except NameError:
            return str(self.id)  # python 3 support

    def __repr__(self):
        return '<User %r>' %  self.email

class Posting(db.Model):
    __tablename__ = 're_postings'

    id = db.Column(db.Integer, db.Sequence('re_postings_id_seq'), primary_key=True)
    title = db.Column(db.String(255))
    category = db.Column(db.String(80))
    author = db.Column(db.String(80))
    date = db.Column(db.DateTime)
    description = db.Column(db.String(255))
    body = db.Column(db.String(2048))
    numOfPics = db.Column(db.Integer)

    def __init__(self, title, category, author, date, description, body, numOfPics ):
        self.title = title
        self.category = category
        self.author = author
        self.date = date
        self.description = description
        self.body = body
        self.numOfPics = numOfPics

    def __repr__(self):
        return '<House %r>' %  self.title

@app.route("/", defaults={'path':''})
@app.route('/index')
@cross_origin()
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/api/', methods=['GET', 'POST'])
def home():
    return "ok"

@app.route('/api/time', methods=['GET', 'POST'])
def get_current_time():
    return {'time': time.time()}

@app.route('/api/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':   
        email = request.json.get('email', None)
        password = request.json.get('password', None)
        print("test")
        if not email:
            return jsonify({"msg": "Missing username parameter"}), 400
        if not password:
            return jsonify({"msg": "Missing password parameter"}), 400
        
        user = User.query.filter_by(email=email).first()
        if user is not None and check_password_hash(user.password,password):           
            access_token = create_access_token(identity=email)
            refresh_token = create_refresh_token(identity=email)
            return {
                'id' : user.id,
                'firstname' : user.first_name,
                'lastname' : user.last_name,
                'access_token': access_token,
                'refresh_token': refresh_token,
                'access_rights': user.is_admin
            }
        return jsonify({"msg": "Incorrect email or password"}), 400
    else:
        return jsonify({"msg": "There was an error"}), 400

@app.route('/api/postings', methods=['GET', 'POST'])
def postings():
    if request.method == 'GET':
        result = Posting.query.all()
        postings = []
        for posting in result:
            post = {"id":posting.id,"title":posting.title, "category":posting.category, "author":posting.author, "date":str(posting.date), "description":posting.description, "body":posting.body, "numOfPics":posting.numOfPics }
            postings.append(post)
        response = jsonify({'postings': postings})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
        #return json.dumps(postings)
    else:
        result = request.form
        photos = request.files.getlist("photos")
        numOfPics = (len(photos))
        print(photos)
        #title = request.json.get('title', None)
        #category = request.json.get('category', None)
        #author = request.json.get('author', None)
        #date = request.json.get('date', None)
        #description = request.json.get('description', None)
        #body = request.json.get('body', None)
        newPost = Posting( title=result['title'], category=result['category'], author=result['author'], date=result['date'], description=result['description'], body=result['body'], numOfPics=numOfPics)
        db.session.add(newPost)
        db.session.flush()
        prefix = "post" + str(newPost.id)
        os.makedirs(app.config['UPLOAD_FOLDER'] + prefix)   
        for index, pic in enumerate(photos):
            filename = "img" + str(index) + ".jpg"
            pic.save(os.path.join(app.config['UPLOAD_FOLDER'] + prefix, filename))
        db.session.commit()
        return jsonify({"msg": "added successfully","id":newPost.id, "numOfPics":numOfPics}), 200

@app.route('/api/message', methods=['POST'])
def sendMessage():
    if request.method == "POST":
        contactName = request.json.get('contactName', None)
        contactEmail = request.json.get('contactEmail', None)
        nationality = request.json.get('nationality', None) 
        contactSubject =  request.json.get('contactSubject', None)
        contactMessage = request.json.get('contactMessage', None)
        category = request.json.get('category', None)
        otherNation = request.json.get('otherNation', None)

        if (nationality == "Other"):
            nationality = otherNation

        if (category == "Consular"):
            sendTo = "consul-jhcnig@mfaft.gov.jm"
        elif (category == "Diplomatic"):
            sendTo = "counsellor-jhcnig@mfaft.gov.jm"
        elif(category == "General"):
            sendTo = "info-jhcnig@mfaft.gov.jm"
    
        #sending email message
        body = MIMEText(EmailTemp.format(contactName, contactEmail, nationality, contactSubject, contactMessage),"html")
        sendEmail(sendTo ,contactSubject,body)
        return jsonify({"msg":"Message sent successfully"}), 200

@app.errorhandler(404)
def handle_404(e):
    if request.method == 'GET':
        return redirect(f'/?request_path={quote_plus(request.path)}')
    return e