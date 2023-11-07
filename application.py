# application.py (Flask Application)

from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy

application = Flask(__name__)

# Configure your database URI based on the database you're using (PostgreSQL)
application.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:70908654@santadb.cei9i2nvyxfj.eu-west-1.rds.amazonaws.com:5432/santadb'
db = SQLAlchemy(application)

# Define the Questionnaire model
class Questionnaire(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    favorite_color = db.Column(db.String(100))
    shoe_size = db.Column(db.String(100))
    pants_size = db.Column(db.String(100))
    blouse_size = db.Column(db.String(100))
    hobbies = db.Column(db.String(100))


# Implement your Flask routes for data retrieval and storage.
# Define routes to retrieve and store questionnaire answers in the database.

@application.route('/')
def home():
    return render_template('home.html')

@application.route('/questionnaire')
def questionnaire():
    return render_template('questionnaire.html')

@application.route('/answers')
def answers():
    # Retrieve answers from the database
    answers = Questionnaire.query.all()

    # Convert answers to a list of dictionaries
    answers_list = []
    for answer in answers:
        answers_list.append({
            "username": answer.username,
            "favorite_color": answer.favorite_color,
            "shoe_size": answer.shoe_size,
            "pants_size": answer.pants_size,
            "blouse_size": answer.blouse_size,
            "hobbies": answer.hobbies
        })

    return render_template('answers.html', answers=answers_list)


@application.route('/store_answer', methods=['POST'])
def store_answer():
    if request.method == 'POST':
        data = request.form
        username = data['username']
        favorite_color = data['favorite_color']
        shoe_size = data['shoe_size']
        pants_size = data['pants_size']
        blouse_size = data['blouse_size']
        hobbies = data['hobbies']

        # Store the answers in the database
        questionnaire = Questionnaire(username=username, favorite_color=favorite_color, shoe_size=shoe_size, pants_size=pants_size, blouse_size=blouse_size, hobbies=hobbies)
        db.session.add(questionnaire)
        db.session.commit()
        return redirect(url_for('answers'))

# if __name__ == '__main__':
def create_app():
    with application.app_context():
        db.create_all()
    application.run(debug=True)
