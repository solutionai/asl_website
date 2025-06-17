from flask import Flask, render_template, url_for, redirect, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<page>')
def page(page):
    try:
        return render_template(f"{page}.html")
    except:
        return redirect(url_for('index'))

# Route to handle any missing files
@app.route('/<path:filename>')
def custom_static(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
