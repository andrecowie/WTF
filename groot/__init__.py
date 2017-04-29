from flask import Flask, render_template, request, url_for, redirect, session
import os
from datetime import datetime

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/input', methods=['POST'])
def input():
	if request.method == 'POST':
		pass		
	else:
		return redirect(url_for('index'))

app.secret_key = 'anotherBigSecretGuessthis12456939433517254'

if __name__ == '__main__':
    app.run()
