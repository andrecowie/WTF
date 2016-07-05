#!/usr/bin/python2.7

from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    mypages = {'ur cute': 'cute', 'utopia': 'plan', 'an employer': 'working', 'me': 'aka', 'friend': 'mate'}
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        response = request.form['youare']
        if response.lower() in mypages or response[:6] == 'friend':
            if (response.lower()[:6] == 'friend') and (len(response) > 7):
                return redirect('/' + mypages[response.lower()[:6]] + '/' + response.lower()[7:])
            return redirect('/' + mypages[response.lower()])
        else:
            return redirect('/home')
    else:
        return 'Unsupported method.'


@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/cute', methods=['GET', 'POST'])
def hello():
    if request.method == 'GET':
        return render_template('cute.html')
    elif request.method == 'POST':
        name = request.form['theName']
        number = request.form['theNumber']
        message = request.form['theNumber']
        return "U R Fabulous"


@app.route('/mate', methods=['GET', 'POST'])
def genericmate():
    if request.method == 'GET':
        return render_template("mate.html")
    elif request.method == 'POST':
        message = request.form('theMessage')


@app.route('/plan')
def dosomething():
    return render_template('plan.html')


@app.route('/working', methods=['GET', 'POST'])
def uwantme():
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


@app.route('/aka')
def public():
    pass


if __name__ == '__main__':
    app.run()
