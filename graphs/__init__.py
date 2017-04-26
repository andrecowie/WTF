from flask import Flask, render_template, url_for, request
import os
from datetime import datetime
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    logger.info(str(request.environ['REMOTE_ADDR']))
    return render_template('index.html')

app.secret_key = 'anotherBigSecretGuessthis12456939433517254'

if __name__ == '__main__':
    app.run()

