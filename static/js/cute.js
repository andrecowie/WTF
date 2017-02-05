setTimeout(function(){
		$(".element").typed({
		    strings: ["Kia Ora, I'm Andre.\n Send me some love!", "I might send some back."],
		    backDelay: 500,
            typeSpeed: 35,
            backSpeed: 0.2,
            startDelay: 1000,
            loop: false,
            loopCount: false,
            showCursor: false
        });fa
	}
, 500);

setTimeout(function getNumber(){
	var f = document.createElement("form");
	f.setAttribute('action',"/iwouldliketogettoknowyou");
	f.setAttribute('method',"post");
	f.style.background = "black";
	f.style.textAlign = "center";
	f.setAttribute('id', "formsend");

	var k = document.createElement("textarea");
	k.setAttribute('type',"text");
	k.setAttribute('placeholder', "LOVE");
	k.required = true;
	k.setAttribute('name', "theMessage");
	k.style.background = "black";
	k.style.color = "white";
	k.style.border = "0";
	k.style.textAlign = "center";
	k.style.marginTop = "2%";

	var l = document.createElement("button");
	l.setAttribute('type', "submit");
	l.setAttribute('value', "submit");
	l.setAttribute('class', "button button-3d button-caution button-pill");
	l.innerHTML = "SEND";
	l.style.marginTop = "1%";

	// var l = document.createElement("input");
	// l.setAttribute('type', "submit");
	// l.setAttribute('class', "button button-3d button-primary button-caution button-pill");
	// l.innerHTML = "SEND";
	f.appendChild(k);
	f.appendChild(document.createElement("br"));
	f.appendChild(l);
	document.getElementsByTagName('body')[0].appendChild(f);
}, 8600);
