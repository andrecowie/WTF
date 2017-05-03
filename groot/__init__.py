from flask import Flask, render_template, request, url_for, redirect, session
import json
import os
import boto3
from pytz import timezone
import pytz
from datetime import datetime
from geoip import geolite2
from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, NumberAttribute
import random

app = Flask(__name__)

class Visitor(Model):
    class Meta:
        table_name = "visitors"
        region = 'ap-southeast-2'
    visitorId = UnicodeAttribute(hash_key=True)
    sessionId = NumberAttribute()
    ipAddr = UnicodeAttribute()
    inputMsg = UnicodeAttribute(null=True)
    country = UnicodeAttribute(null=True)
    continent = UnicodeAttribute(null=True)

@app.route('/', methods=['GET'])
def index():
    if not Visitor.exists():
        Visitor.create_table(read_capacity_units=1, write_capacity_units=1, wait=True)
    time = timezone('Pacific/Auckland')
    x = datetime.now(tz=time)
    visitoridfield = str(x.day) + "/"+ str(x.month) +" - " + str(x.hour) + "."+ str(x.minute)+"."+str(x.second)+"."+str(random.randint(1, 200))
    local = str(request.environ['REMOTE_ADDR'])
    location = geolite2.lookup(local)
    Visitor(visitoridfield, sessionId=random.randint(1,100),ipAddr=local, country=location.country,continent=location.continent).save()

    return render_template('index.html')

@app.route('/input', methods=['POST'])
def input():
	if request.method == 'POST':
		message = request.json['message']
                if not Visitor.exists():
                    Visitor.create_table(read_capacity_units=1, write_capacity_units=1, wait=True)
                time = timezone('Pacific/Auckland')
                x = datetime.now(tz=time)
                visitoridfield = str(x.day) + "/"+ str(x.month) +" - " + str(x.hour) + "."+ str(x.minute)+"."+str(x.second)+"."+str(random.randint(1, 200))
                local = str(request.environ['REMOTE_ADDR'])
                location = geolite2.lookup(local)
                Visitor(visitoridfield, sessionId=random.randint(1,100),ipAddr=local, country=location.country,continent=location.continent, inputMsg=message).save()
                items = {
                    'cute': {
                    'header':"I'm looking for someone that is what you say you are.",
                    'body':["Plus a few other qualities."],
                    'timeoutBody':2000,
                    'newInput': True,
                    'endpoint': '/cute'
                    },
                    'professional' : {
                        'header': 'A fellow pro, collaboration is key.',
                        'body': ['I assume you would like to see us working together.','Me too.'],
                        'timeoutBody':2000
                    }
                }
		if message in items:
			return json.dumps(items[message])
	else:
		return redirect(url_for('index'))

app.secret_key = 'anotherBigSecretGuessthis12456939433517254'

if __name__ == '__main__':
    app.run()
