from flask import Flask, render_template, request, url_for, redirect, session
import json
import os
import boto3
from datetime import datetime

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/input', methods=['POST'])
def input():
	if request.method == 'POST':
		message = request.json['message']
		if message in ['cute', 'professional', 'nz']:
			return json.dumps({"header": 'Hey if you are what you say you are...', "body" : "I'd come back in a week or so.", "timeoutBody": 2000})
	else:
		return redirect(url_for('index'))

app.secret_key = 'anotherBigSecretGuessthis12456939433517254'

if __name__ == '__main__':
    app.run()
