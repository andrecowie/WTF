/**
 * Created by abcdre on 8/05/2016.
 */
$(document).ready(function() {
    $('div.header').animate({opacity:"+1"}, 4000);
    function myMessage(){
        $('#story').typed({
            strings: ["Hello.", "This website relates to my interests, goals and dreams.<br>I believe things will change, for the better.<br>However first holistically we need to make a change.<br>In our view of life and individual situations.<br>We need to aim for presence and unity.<br>And remove the effects we feel from greed and scarcity combined.<br>Transparency and equality should come hand in hand.<br>We should think of the most ethical solution to overproduction and work locally.","To be continued..." ],
            backDelay: 500,
            typeSpeed: 46,
            backSpeed: 0.2,
            startDelay: 1500,
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

    function inputPlease(){
	var x = document.createElement("form");
        x.setAttribute('method',"post");
        x.setAttribute('action',"/");
        x.setAttribute('id', "formsend");

        var y = document.createElement("input");
        y.setAttribute('type', "text");
        y.setAttribute('placeholder', "any input");
        y.setAttribute('name', "input");
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
        setTimeout(myMan, 25000)
	    setTimeout(inputPlease, 55000);

    };

    setTimeout(startMessage, 3000);
});
