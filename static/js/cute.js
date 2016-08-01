setTimeout(function(){
		$(".element").typed({
		    strings: ["Cut to the chase.", "I wanna take you out.", "We could be cute."],
		    backDelay: 500,
            typeSpeed: 35,
            backSpeed: 0.2,
            startDelay: 1000,
            loop: false,
            loopCount: false,
            showCursor: false
        });
	}
, 500);

setTimeout(function getNumber(){
	var f = document.createElement("form");
	f.setAttribute('action',"/iwouldliketogettoknowyou");
	f.setAttribute('method',"post");
	f.style.background = "black";
	f.style.textAlign = "center";
	f.setAttribute('id', "formsend");	

	var i = document.createElement("input");
	i.setAttribute('type',"text");
	i.setAttribute('placeholder', "name");
	i.setAttribute('name',"theName");
	i.style.background = "black";
	i.style.textAlign = "center";
	i.style.color = "white";
	i.style.border = "0";

	var j = document.createElement("input");
	j.setAttribute('type',"text");
	j.setAttribute('placeholder', "number");
	j.setAttribute('name', "thePhone");
	j.style.background = "black";
	j.style.textAlign = "center";
	j.style.color = "white";
	j.style.border = "0";

	var k = document.createElement("input");
	k.setAttribute('type',"text");
	k.setAttribute('placeholder', "message");
	k.setAttribute('name', "theMessage");
	k.style.background = "black";
	k.style.color = "white";
	k.style.border = "0";
	k.style.textAlign = "center";

	var l = document.createElement("input");
	l.setAttribute('type', "submit");
	l.style.display = "none";
	f.appendChild(i);
	f.appendChild(j);
	f.appendChild(k);
	f.appendChild(l);
	document.getElementsByTagName('body')[0].appendChild(f);
}, 8600);
