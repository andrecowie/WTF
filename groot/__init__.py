from flask import Flask, render_template, request, url_for, redirect, session
import json
import os
import boto3
from pytz import timezone
import pytz
from datetime import datetime
from geoip import geolite2
from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, NumberAttribute, JSONAttribute
import uuid
from passlib.hash import sha256_crypt
import ast

app = Flask(__name__)

class AuthDre(Model):
	class Meta:
		table_name = "authenticedre"
		region = 'ap-southeast-2'
	name= UnicodeAttribute(hash_key=True)
	authe =  UnicodeAttribute()
	auth = UnicodeAttribute(range_key=True)


class FirstMessages(Model):
	class Meta:
		table_name = "firstmessages"
		region = 'ap-southeast-2'
	number=NumberAttribute(hash_key=True)
	name= UnicodeAttribute(range_key=True)
	header =  JSONAttribute()
	body = JSONAttribute()
	icon = UnicodeAttribute()


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

#This is a portal for me to authenticate and to update inputs (current plan) [frontend]
@app.route('/secretportal', methods=['GET'])
def portal():
	if 'master' in session:
		if not FirstMessages.exists():
			FirstMessages.create_table(read_capacity_units=3, write_capacity_units=3, wait=True)
		firstmessages = {}
		count = 0
		while FirstMessages.count(count) == 1:
			for x in FirstMessages.query(count):
				firstmessages[x.name] = {'number':count,'header':x.header, 'body':x.body , 'icon':x.icon}
			count = count+1
		return render_template("inputs.html", firstmessages=firstmessages )
	else:
		return render_template("auth.html")

@app.route('/newFirstMessage', methods=['POST'])
def newfirstmessage():
	if 'master' in session:
		header = request.json['header']
		body = request.json['body']
		header = ast.literal_eval(header)
		body = ast.literal_eval(body)
		name = request.json['name']
		if 'number' in request.json:
			number = request.json['number']
			x = FirstMessages.get(number, name)
			x.update({
				'header':{
					'action': "put",
					'value': header
				},
				'body':{
				'action':"put",
				'value': body
				}
			})
			return json.dumps([number])
		icon = request.json['icon']
		count = 0
		while FirstMessages.count(count) == 1:
			count = count + 1
		FirstMessages(name=name, icon=icon, body=list(body), header=list(header), number=count).save()
		return json.dumps([request.json['name']])

@app.route("/youdontknowthisurl", methods=['POST'])
def youdontknow():
	if request.method == 'POST':
		authe = request.json['authe']
		auth = request.json['auth']
		if not AuthDre.exists():
			AuthDre.create_table(read_capacity_units=1, write_capacity_units=1, wait=True)
		#AuthDre(name="Andre", auth=sha256_crypt.encrypt(auth+'111'), authe=sha256_crypt.encrypt(authe+'999') ).save()
		x = AuthDre.query("Andre")
		x = x.next()
		if sha256_crypt.verify(auth+"111", x.auth):
			session['master'] = True
		return json.dumps(['Done'])


@app.route('/input', methods=['POST'])
def input():
	if request.method == 'POST':
		message = request.json['message']
		session['participation'] = True
		if not Participation.exists():
			Participation.create_table(read_capacity_units=3, write_capacity_units=3, wait=True)
		Participation(sessionId=str(session['id']), ipAddr=str(request.environ['REMOTE_ADDR']), message=message).save()
		items = {
			'default' :{
				'header': ['You take the Red Pill.'],
				'body': ['You stay in wonderland and I show you how deep the rabbit-hole goes.'],
				'timeoutBody':4000,
				'default': True
			}
		}
		count = 0
		while FirstMessages.count(count) == 1:
			for x in FirstMessages.query(count):
				items[x.name] = {'header':x.header, 'body':x.body}
				print("Adding"+str(items))
			count = count+1
		if message in items:
			print("message in items " + json.dumps(items[message]))
			return json.dumps(items[message])
		else:
			print("message not in items " + json.dumps(items['default']))
			return json.dumps(items['default'])
	else:
		return "Error"

app.secret_key = 'anotherBigSecretGuessthis12456939433517254'

if __name__ == '__main__':
	app.run()
