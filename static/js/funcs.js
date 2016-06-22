setTimeout(function(){
		$(".element").typed({
		strings:["Hi, i'm Andre and your cute.", "You should leave me your details", "Or just leave me a message..."],
		showCursor: false,
		typeSpeed: 50
		});	
	}
, 3000);

setTimeout(function getNumber(){
	var f = document.createElement("form");
	f.setAttribute('action',"/hello");
	f.setAttribute('method',"post");
	f.style.background = "black";
	f.setAttribute('id', "formsend");	

	var i = document.createElement("input");
	i.setAttribute('type',"text");
	i.setAttribute('placeholder', "name");
	i.setAttribute('name',"theName");
	i.style.background = "black";
	i.style.color = "white";
	i.style.border = "0";

	var j = document.createElement("input");
	j.setAttribute('type',"text");
	j.setAttribute('placeholder', "number");
	j.setAttribute('name', "thePhone");
	j.style.background = "black";
        j.style.color = "white";
        j.style.border = "0";
	var k = document.createElement("input");
        k.setAttribute('type',"text");
        k.setAttribute('placeholder', "message");
        k.setAttribute('name', "theMessage");
        k.style.background = "black";
        k.style.color = "white";
        k.style.border = "0";
	var l = document.createElement("input");
	l.setAttribute('type', "submit");
	l.style.display = "none";
	f.appendChild(i);
	f.appendChild(j);
	f.appendChild(k);
	f.appendChild(l);
	document.getElementsByTagName('body')[0].appendChild(f);
}, 20000);
