var formula = function(div) {
	var enough = document.createElement('h4');
	enough.setAttribute("style", "text-align: center; margin-top: " + (($(window).height() / 2) - 12) + "px");
	enough.setAttribute("id", "enough");
	div.appendChild(enough);
	$("#enough").typed({
		strings: ["All it takes is enough of us to say enough."],
		typeSpeed: 35,
		loop: false,
		showCursor: false
	});
	setTimeout(function() {
		div.removeChild(enough);
		var form = document.createElement('form');
		var input = document.createElement('input');
		input.setAttribute("type", "text");
		input.setAttribute("class", "form-control");
		input.setAttribute("style", "text-align:center;font-family: Ubuntu");
		input.setAttribute("id", "words");
		form.appendChild(input);
		var youAreDiv = document.createElement('div');
		youAreDiv.setAttribute("style", "margin-top: " + (($(window).height() / 2) - 30) + "px;height:20px;");
		var youAre = document.createElement('h4');
		youAre.setAttribute("style", "text-align:center;margin-top: " + (($(window).height() / 2) - 30) + "px;");
		youAre.setAttribute("id", "youare");
		youAreDiv.appendChild(youAre);
		div.appendChild(youAreDiv);
		$("#youare").typed({
			strings: ['U R'],
			typeSpeed: 35,
			loop: true,
			showCursor: false

		});
		var future = document.createElement('h4');
		future.setAttribute("style", "text-align:center;");
		future.setAttribute("id", "future");
		div.appendChild(form);
		div.appendChild(future);
		$("#future").typed({
			strings: ['the future.'],
			typeSpeed: 35,
			loop: true,
			showCursor: false

		});
	}, 5000);
}
$(document).ready(function() {
	console.log("Ready!");
	var hello = document.createElement("h3");
	hello.setAttribute("style", "text-align: center;margin-top: " + (($(window).height() / 2) - 24) + "px;");
	hello.setAttribute("id", "hello");
	var div = document.createElement("div");
	var startdiv = $("div").get(0);
	div.setAttribute("class", "col-xl-6 col-xl-offset-3 col-md-8 col-md-offset-2 col-sm-12 col-xs-12");
	div.appendChild(hello);
	startdiv.appendChild(div);
	$("#hello").typed({
		strings: ["Is it finally time?"],
		typeSpeed: 35,
		loop: false,
		showCursor: false
	});
	setTimeout(function() {
		hello.innerHTML = "";
		div.removeChild(hello);
		formula(div);
	}, 5000);
})
