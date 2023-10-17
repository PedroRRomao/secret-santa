from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/generate', methods=['GET'])
def generate():
    # Replace this logic with your questionnaire data gathering and HTML rendering
    # You can use Jinja2 templates as before
    questionnaire_data = {
        'favorite_color': 'Blue',
        'food_preference': 'Pizza'
    }

    rendered_html = render_template('answers.html', answers=questionnaire_data)

    # Save the generated HTML to a static file
    with open(os.path.join('static', 'generated.html'), 'w') as f:
        f.write(rendered_html)

    return 'HTML Generated'

if __name__ == '__main__':
    app.run()
