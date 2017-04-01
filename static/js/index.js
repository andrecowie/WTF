var movingOn = function(rootDiv, oldDiv){ 
	var divJq = jQuery( oldDiv );
	console.log( divJq.height());
	divJq.animate({
		"marginTop": "-="+(divJq.height()*2)+"px"
	}, "slow");
	setTimeout(function(){ 
		rootDiv.removeChild(oldDiv);
	}, 1000);
};
$(document).ready(function(){
	console.log("Ready");
	var hello = document.createElement("h3");
	hello.setAttribute("id", "hello");
	hello.setAttribute("style", "text-align: center;");
	var div = document.createElement("div");
	div.setAttribute("class", "col-xs- col-lg-offset-3 col-lg-6");
	div.appendChild(hello);
	var startdiv = $("div").get( 0 );
	startdiv.appendChild(div);
	setTimeout(function(){ 
		$( '#hello' ).typed({
			strings: ["Hello"],
			backDelay: 500,
			typeSpeed: 35,
			backSpeed: 0.2,
			loop: false,
			showCursor: false 
		});
		var whoami = document.createElement("h5");
		whoami.setAttribute("id", "whoami");
		whoami.setAttribute("style", "text-align: center;");
		div.appendChild(whoami);
		setTimeout(function(){ 
			$('#whoami').typed({
				strings: ["I am a young aucklander interested in where this ship is sailing.", "I think I can see how things need to change."],
				backDelay: 300,
				typeSpeed: 15,
				backSpeed: 0,
				loop: false,
				showCursor: false
			});
			var whatiknow = document.createElement("h6");
			whatiknow.setAttribute("id", "whatiknow");
			whatiknow.setAttribute("style", "text-align:center;" );
			div.appendChild(whatiknow);
			setTimeout(function(){
				$('#whatiknow').typed({
					strings: ["There are three main things i would like to address on this website."],
					backDelay: 1,
					loop: false,
					typeSpeed: 20,
					backSpeed: 1,
					showCursor: false
				});
				var sustainability = document.createElement("h6");
				sustainability.setAttribute("id", "sustainability");
				sustainability.setAttribute("style", "text-align:center;" );
				div.appendChild(sustainability);
				setTimeout(function(){
					$( '#sustainability' ).typed({
						strings: ["<a href=\"\">Sustainability</a>", "<a href=\"\">Fairness</a>", "<a href=\"\">Standing</a>", "Hah too slow\!"],
						backDelay: 1,
						loop: false,
						typeSpeed: 20,
						backSpeed: 1,
						showCursor: false
					});
					setTimeout( function(){
						movingOn(startdiv, div)
					}, 5000);

				},5000);
			}
			,12000);
		}
		, 1000);

	}
	, 1000);
});
