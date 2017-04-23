var map;
function initMap() {
	var uluru = {lat:8.7832, lng: 200.5085};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 2,
		center: uluru,
		disableDefaultUI: true,
		styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#4E89B0'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            },
	    {
	      featureType: "all",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
  	    }
          ],
	});
}
var mapZoomAndChat = function(){
	setTimeout(function(){
		map.setZoom(5);
		map.setCenter({lat: -40.3410, lng: -186.3121})
	}, 2000);
}

var soPrettyMuch = function(div){
	var soprettymuch = document.createElement("h2");
	soprettymuch.setAttribute("id","soprettymuch");
	soprettymuch.setAttribute("style", "text-align: center;");
	div.appendChild(soprettymuch);
	$('#soprettymuch').typed({
		strings: ["SO PRETTY MUCH."],
		backDelay: 500,
		typeSpeed: 35,
		backSpeed: 0.2,
		loop: false,
		showCursor: false 
	});
	setTimeout(function(){
		console.log("Window: "+$(window).height());
		console.log("h2 height: "+parseInt($( 'h2' ).css("height"), 10));
		console.log("h2 margintop: "+parseInt($('h2').css("margin-top"), 10));
		$("#map").css('height', $(window).height()-(parseInt($("#soprettymuch").css("height"),10)+parseInt($('#soprettymuch').css('margin-top'),10)+parseInt($('#soprettymuch').css("margin-bottom"), 10))+"px");
		initMap();
		$("#map").css('opacity', "1");	
		mapZoomAndChat();
	}, 1000);
	
}


var movingOn = function(rootDiv, oldDiv){ 
	var divJq = jQuery( oldDiv );
	var divJqHeightTimesTwo = (divJq.height()*2);
	divJq.animate({
		"marginTop": "-="+divJqHeightTimesTwo+"px"
	},3000);
	setTimeout(function(){ 
		while(oldDiv.hasChildNodes())
		{
			oldDiv.removeChild(oldDiv.lastChild);
		}
		divJq.animate({
			"marginTop": "+="+divJqHeightTimesTwo+"px"
		}, 1000);
		soPrettyMuch(oldDiv);
//		rootDiv.removeChild(oldDiv);
	}, 3000);


};
$(document).ready(function(){
	var hello = document.createElement("h3");
	hello.setAttribute("id", "hello");
	hello.setAttribute("style", "text-align: center;");
	var div = document.createElement("div");
	div.setAttribute("class", "col-xs- col-lg-offset-3 col-lg-6");
	div.appendChild(hello);
	var startdiv = $("div").get( 0 );
	var mapdiv = document.getElementById('map');
	startdiv.insertBefore(div, mapdiv);
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
