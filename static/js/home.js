/**
 * Created by abcdre on 8/05/2016.
 */
$(document).ready(function() {
    $('div.header').animate({opacity:"+1"}, 4000);

    function myMessage(){
        $('#story').typed({
            strings: ["Hello.", "","I believe the best future for us can be achieved by trying our hardest collectively to minimize the two biggest problems we face in our society.","Greed.","and","Scarcity.","The smaller these problems become, the more equal we will become collectively.","How can we make these problems smaller?"],
            backDelay: 500,
            typeSpeed: 30,
            backSpeed: 30,
            startDelay: 1500,
            loop: false,
            loopCount: false,
            showCursor: false
        });
    };

    function startMessage(){
        $('.content').animate({opacity:"+1"}, 2000);
        setTimeout(myMessage, 3000);
	setTimeout(inputPlease, 55000);
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

    setTimeout(startMessage, 3000);
});
