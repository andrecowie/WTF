$(document).ready(function myMessage(){
        $('#story').typed({
            strings: ["You want to work with me.", "Here's why.<br>I am"],
            backDelay: 500,
            typeSpeed: 30,
            backSpeed: 30,
            startDelay: 1500,
            loop: false,
            loopCount: false,
            showCursor: false
        });

	var a = document.createElement("ul");
	var b = document.createElement("li");
	var c = document.createElement("li");
	var d = document.createElement("li");
        var e = document.createElement("li");
	var f = document.createElement("li");

	b.innerHTML = "Highly Motivated.";
	c.innerHTML = "Highly Driven.";
	d.innerHTML = "Fun to be around.";
	e.innerHTML = "Will learn the solution for any problem domain.";
	f.innerHTML = "Broad knowledge in many different areas.";
	a.appendChild(b);
	a.appendChild(c);
	a.appendChild(d);
	a.appendChild(e);
	a.appendChild(f);
	setTimeout(function(){
	document.getElementsByTagName('div')[0].appendChild(a);}, 7500)
    });
