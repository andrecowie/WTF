from flask import Flask, render_template, request, url_for, redirect, session
import json
import os
import boto3
from pytz import timezone
import pytz
from datetime import datetime
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

@app.route('/', methods=['GET'])
def index():
    if not Visitor.exists():
        Visitor.create_table(read_capacity_units=1, write_capacity_units=1, wait=True)
    time = timezone('Pacific/Auckland')
    x = datetime.now(tz=time)
    visitoridfield = str(x.day) + "/"+ str(x.month) +" - " + str(x.hour) + "."+ str(x.minute)+"."+str(x.second)+"."+str(random.randint(1, 200))
    Visitor(visitoridfield, sessionId=random.randint(1,100),ipAddr=str(request.environ['REMOTE_ADDR'])).save()
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
                Visitor(visitoridfield, sessionId=random.randint(1,100),ipAddr=str(request.environ['REMOTE_ADDR']), inputMsg=str(message)).save()
		if message in ['cute', 'professional', 'nz']:
			return json.dumps({"header": 'Hey if you are what you say you are...', "body" : "I'd come back in a week or so.", "timeoutBody": 2000})
	else:
		return redirect(url_for('index'))

app.secret_key = 'anotherBigSecretGuessthis12456939433517254'

if __name__ == '__main__':
    app.run()
