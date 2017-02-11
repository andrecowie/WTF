#!/usr/bin/python2.7

from flask import Flask, render_template, request, url_for, redirect
import os

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    mypages = {'new zealand': 'kiwiland', 'nz': 'kiwiland', 'cute': 'iwouldliketogettoknowyou', 'utopia': 'plan',
               'professional': 'working', 'me': 'aka', 'friend': 'mate'}
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        response = request.form['youare']
        inp = open("/var/www/wtf/WTF/static/utl/stores/indexput.txt", "a")
        inp.write(response + "\n")
        inp.close()
        if response.lower() in mypages or response[:6] == 'friend':
            if (response.lower()[:6] == 'friend') and (len(response) > 7):
                return redirect('/' + mypages[response.lower()[:6]] + '/' + response.lower()[7:])
            return redirect('/' + mypages[response.lower()])
        else:
            return redirect(url_for('home'))
    else:
        return 'Unsupported method.'


@app.route('/goodchat')
def nand():
    return "I enjoyed our chat and I hope we get the opportunity to discuss these big problems and big solutions! As students and lecturers our only goal should be to improve the amount both lecturers and students can learn. The bigger question is how..."


@app.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        user_input = request.form['input']
        inp = open('/var/www/wtf/WTF/static/utl/stores/homeput.txt', 'a')
        inp.write(user_input+"\n")
        inp.close()
    return render_template('home.html')


@app.route('/iwouldliketogettoknowyou', methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        message = request.form['theMessage']
        cutie = open('/var/www/wtf/WTF/static/utl/stores/cuteput.txt', 'a')
        cutie.write(message+" "+"\n")
        cutie.close()
        return "Thanks cutie."
    return render_template('cute.html')


@app.route('/kiwiland', methods=['GET'])
def progression():
    return render_template('kiwiland.html')


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
        return render_template('working.html')
    elif request.method == 'POST':
        pass


@app.route('/aka')
def public():
    pass


if __name__ == '__main__':
    app.run()
