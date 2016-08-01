/**
 * Created by abcdre on 8/05/2016.
 */
$(document).ready(function() {
    $('div.header').animate({opacity:"+1"}, 4000);
    function myMessage(){
        $('#story').typed({
            strings: ["Hello.", "This website relates to my interests, goals and dreams.<br>I believe things will change, for the better.<br>However first we need to implement a modern way of governing ourselves.<br>So that we have a way of managing greed and scarcity.<br>Allowing us to advance culturally in the direction of equality.<br>Removing misinformed ideals and misinformation in general will help us as individuals achieve more and work more efficiently together.<br>Establishing a way for society to be more connected and efficient is of paramount importance. <br> For both individual and collective bodies."],
            backDelay: 500,
            typeSpeed: 35,
            backSpeed: 0.2,
            startDelay: 1000,
            loop: false,
            loopCount: false,
            showCursor: true
        });
    };

    function myMan(){
      $('.glimpse').animate({opacity:"+1"}, 1000);
      $('.glimpse').animate({opacity:"-1"}, 1000);
      var par = document.getElementById('content');
      var man = document.getElementById('glimpse');
      setTimeout(function(){par.removeChild(man)},2000);
    };

    function system(){
      $('.glimpsee').animate({opacity:"+1"}, 1000);
      $('.glimpsee').animate({opacity:"-1"}, 1000);
      var par = document.getElementById('content');
      var sys = document.getElementById('glimpsee');
      setTimeout(function(){par.removeChild(sys)},2000);
    };

    function greed(){
      $('.glimpseee').animate({opacity:"+1"}, 1000);
      $('.glimpseee').animate({opacity:"-1"}, 1000);
      var par = document.getElementById('content');
      var gre = document.getElementById('glimpseee');
      setTimeout(function(){par.removeChild(gre)},2000);
    };

    function inputPlease(){
	var x = document.createElement("form");
        x.setAttribute('method',"post");
        x.setAttribute('action',"/");
        x.setAttribute('id', "formsend");

        var y = document.createElement("input");
        y.setAttribute('type', "text");
        y.setAttribute('placeholder', "any input");
        y.setAttribute('name', "input");
        y.style.fontFamily = "Ubuntu";
        y.style.background = "black";
        y.style.color = "white";
        y.style.border = "0";
	    y.style.textAlign = "center";
        x.appendChild(y);
        document.getElementsByTagName('body')[0].appendChild(x);
    };

    function startMessage(){
        $('.content').animate({opacity:"+1"}, 2000);
        setTimeout(myMessage, 3000);
        setTimeout(myMan, 25000);
        setTimeout(system, 23000);
        setTimeout(greed, 24000)
	    setTimeout(inputPlease, 55000);

    };

    setTimeout(startMessage, 3000);
});
