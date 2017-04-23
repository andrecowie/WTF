var formula = function(div){
	var democracy = document.createElement('h4');
	var communism = document.createElement('h4');
	var plus = document.createElement('
	
}
$(document).ready(function(){
	console.log("Ready!");
	var hello = document.createElement("h3");
	hello.setAttribute("style", "text-align: center;margin-top: "+(($(window).height()/2)-24)+"px");
	hello.setAttribute("id", "hello");
	var div = document.createElement("div");
	var startdiv = $("div").get( 0 );
	div.setAttribute("class", "col-xl-8 col-xl-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-xs-12");
	div.appendChild(hello);
	startdiv.appendChild(div);
	$("#hello").typed({
		strings:["Is it finally time?"],
		typeSpeed: 35,
		loop: false,
		showCursor: false
	});
	setTimeout(function(){
		hello.innerHTML = "";
		div.removeChild(hello);
		formula(div);
	}, 5000);
})
