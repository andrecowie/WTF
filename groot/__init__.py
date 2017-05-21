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
import uuid

app = Flask(__name__)

class Visitor(Model):
	class Meta:
		table_name = "visitors"
		region = 'ap-southeast-2'
	sessionId =  UnicodeAttribute(hash_key=True)
	ipAddr = UnicodeAttribute(range_key=True)
	visitTime = UnicodeAttribute()
	country = UnicodeAttribute()
	location = UnicodeAttribute()
	visitCount = NumberAttribute()

class Participation(Model):
	class Meta:
		table_name = "wtfparticipation"
		region = 'ap-southeast-2'
	sessionId =  UnicodeAttribute(hash_key=True)
	ipAddr = UnicodeAttribute(range_key=True)
	message = UnicodeAttribute()

@app.route('/', methods=['GET'])
def index():
	if not Visitor.exists():
		Visitor.create_table(read_capacity_units=5, write_capacity_units=5, wait=True)
	ipAddr =  str(request.environ['REMOTE_ADDR'])
	x = datetime.now(tz=timezone('Pacific/Auckland'))
	visitTime =  str(x.day) + "/"+ str(x.month)+"/"+str(x.year)+"  -  " + str(x.hour) + "."+ str(x.minute)+"."+str(x.second)
	location = geolite2.lookup(ipAddr)
	if 'id' not in session:
		userId = str(uuid.uuid4())
		session['id'] = userId
		Visitor(sessionId=userId, ipAddr=ipAddr, visitTime=visitTime, country=str(location.country), location=str(location.location), visitCount=1).save()
	else:
		x = Visitor.get(str(session['id']), ipAddr)
		x.update({
			'visitCount' :{
				'action': 'put',
				'value' : x.visitCount+1
			},
			'visitTime':{
				'action': 'put',
				'value': visitTime
			}
		})
	return render_template('index.html')

	# local = str(request.environ['REMOTE_ADDR'])
	#
	# Visitor(visitoridfield, sessionId=random.randint(1,100),ipAddr=local, country=location.country,continent=location.continent).save()


@app.route('/input', methods=['POST'])
def input():
	if request.method == 'POST':
		message = request.json['message']
		session['participation'] = True
		if not Participation.exists():
			Participation.create_table(read_capacity_units=3, write_capacity_units=3, wait=True)
		Participation(sessionId=str(session['id']), ipAddr=str(request.environ['REMOTE_ADDR']), message=message).save()
		items = {
			'cute': {
			'header':["I'm looking for someone to build something with."],
			'body':["Maybe a", "Relationship", "Maybe a","Friendship", "Or maybe just a", "plain old ship","Any chance we could build this ship?"],
			'timeoutBody':4000,
			'newInput': True,
			'endpoint': '/cute'
			},
			'professional' : {
				'header': ['A fellow pro, collaboration is key.'],
				'body': ['I assume you would like to see us working together.','Me too.'],
				'timeoutBody':2000
			},
			'nz':{
				'header': ['Don\'t worry New Z.'],
				'body': ['This election and these coming years.', 'I promise they are worth looking forward to.'],
				'timeoutBody':2000
			},
			'default' :{
				'header': ['You take the Red Pill.'],
				'body': ['You stay in wonderland and I show you how deep the rabbit-hole goes.'],
				'timeoutBody':4000
			}
		}
		if message in items:
			return json.dumps(items[message])
		else:
			return json.dumps(items['default'])
	else:
		return "Error"

app.secret_key = 'anotherBigSecretGuessthis12456939433517254'

if __name__ == '__main__':
	app.run()
