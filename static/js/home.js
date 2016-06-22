/**
 * Created by abcdre on 8/05/2016.
 */
$(document).ready(function() {
    $('div.header').animate({opacity:"+1"}, 4000);

    function myMessage(){
        $('#story').typed({
            strings: ["Hello."],
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
    };

    setTimeout(startMessage, 3000);
});
