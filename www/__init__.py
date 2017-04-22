#!/usr/bin/python2.7
from flask import Flask, render_template, request, url_for, redirect, session
import os
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

app.secret_key = 'bigAsSecretNooneknows'

if __name__ == '__main__':
    app.run()
