import time
import json

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import request, jsonify
from flask_migrate import Migrate
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity, JWTManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://jhcadmin:keke123@localhost/jhcdb"
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
app.config['SECRET_KEY'] = "some$3cretKey"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

jwt = JWTManager(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

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
    body = db.Column(db.String(255))

    def __init__(self, title, category, author, date, description, body ):
        self.title = title
        self.category = category
        self.author = author
        self.date = date
        self.description = description
        self.body = body

    def __repr__(self):
        return '<House %r>' %  self.title

@app.route('/api/')
def home():
    return "ok"

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

#api method for Login
@app.route('/api/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST' and request.is_json:    
        email = request.json.get('email', None)
        password = request.json.get('password', None)

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
                'refresh_token': refresh_token
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
            post = {"id":posting.id,"title":posting.title, "category":posting.category, "author":posting.author, "date":str(posting.date), "description":posting.description, "body":posting.body }
            postings.append(post)
        return json.dumps(postings)
    else:
        result = request.form
        #photos = request.files.getlist("photos")
        #numOfPics = (len(photos))
        #parking = result["parking"].split(',')
        title = request.json.get('title', None)
        category = request.json.get('category', None)
        author = request.json.get('author', None)
        date = request.json.get('date', None)
        description = request.json.get('description', None)
        body = request.json.get('body', None)
        newPost = Posting( title=title, category=category, author=author, date=date, description=description, body=body)
        db.session.add(newPost)
        db.session.flush()
        filename = "post" + str(newPost.id)
        db.session.commit()
        return jsonify({"msg": "added successfully","id":newPost.id}), 200
