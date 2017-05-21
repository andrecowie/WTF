var participation = function(){
    $('body').css('background-color', 'white');
}

var header = function(response){
    var youAre = document.createElement('h4');
    youAre.setAttribute("style", "text-align:center;margin:"+(($(window).height() / 2) - 19)+"px auto 0 auto;");
    youAre.setAttribute("id", "youare");
    var youAreDiv = document.getElementById("youarediv")
    youAreDiv.parentNode.insertBefore(youAre,youAreDiv.parentNode.firstChild);
    youAreDiv.parentNode.removeChild(youAreDiv);
    $("#youare").typed({
        strings: response['header'],
        typeSpeed: 10,
        loop: false,
        showCursor: false
    });
}

var chatBody = function(response){
    var future = document.createElement('h4');
    future.setAttribute("style", "position:relative:margin:0 auto;text-align:center;");
    future.setAttribute("id", "future");
    $(future).insertAfter("#youare");
    $("#future").typed({
        strings: response['body'],
        typeSpeed: 0,
        loop: false,
        showCursor: false
    });
    setTimeout(participation(), 3000);
}

var talkToServer = function() {
    var logo = document.getElementById("logo");
    var sendDiv = document.getElementById("sendDiv");
    $(logo).animate({
        'marginTop': '-' + youAreDivHeight / 2 + 'px'
    }, 2000);
    $(sendDiv).animate({
        'marginTop': "" + buttonMarginSize+ "px"
    }, 2000);
    setTimeout(function(){
        logo.parentNode.parentNode.removeChild(logo.parentNode);
        sendDiv.parentNode.removeChild(sendDiv);
    }, 2000);
    var message = $('#words').val();
    var inputWords = $('#words').get(0);
    inputWords.parentNode.removeChild(inputWords);
    data = {
        'message': message
    }
    $.ajax({
        type: 'POST',
        url: "/input",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(data, null, '\t'),
        success: function(result) {
            var response = JSON.parse(result);
            if('header' in response && 'body' in response){
                header(response);
                if('timeoutBody' in response){
                    setTimeout(function(){
                        chatBody(response);
                    }, parseInt(response['timeoutBody']))
                }else{
                    chatBody(response);
                }
            }
            else if ('header' in response){
                header(response);
            }
            else if ('body' in response){
                chatBody(response);
            }
        }
    })
}
var buttonMarginSize;
var youAreDivHeight;


var focusing = function() {
    $("#words").keypress(function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            $("#sendBtn").click();
            document.activeElement.blur();
            return false;
        }
    })
    youAreDivHeight = parseInt($('#youarediv').css('marginTop')) + $('#youarediv').height();

    var sendDiv = document.createElement("div");
    sendDiv.setAttribute('id', "sendDiv");

    var sendBtn = document.createElement('button');
    sendBtn.setAttribute("type", "button");
    sendBtn.setAttribute("id", "sendBtn");
    sendBtn.setAttribute("class", "btn");
    sendBtn.innerHTML = "?";
    sendBtn.setAttribute("onclick", "talkToServer()");
    sendDiv.appendChild(sendBtn);

    var logoLink = document.createElement('a');
    logoLink.setAttribute("href", "https://www.whosthefuture.me");
    logoLink.setAttribute("style", "text-align: center;display:block;");

    var logo = document.createElement('img');
    logo.setAttribute('id', "logo");
    logo.setAttribute('src', '../static/$.png');
    logo.setAttribute('style', "margin-top: -" + youAreDivHeight / 2 + "px;")
    logo.setAttribute('height', '' + youAreDivHeight / 2 + "px");

    logoLink.appendChild(logo);

    var responderDiv = $("div").get(1);

    $("#youare").remove();

    $("#future").remove();
    $("#youarediv").css({"height" : ""+youAreDivHeight+"px", "marginTop" : "0px"});
    var responderDivHeight = responderDiv.clientHeight;

    buttonMarginSize = $(window).height() - responderDivHeight;

    sendDiv.setAttribute("style", "text-align: center;margin-top: " + buttonMarginSize + "px;");

    var test = document.getElementById("logo");

    if (typeof(test) != 'undefined' && test != null) {} else {
        youarediv.appendChild(logoLink);
    }
    var testTwo = document.getElementById("sendDiv");
    if (typeof(testTwo) != 'undefined' && testTwo != null) {} else {
        responderDiv.append(sendDiv);
    }
    $(logo).animate({
        'marginTop': '0px'
    }, 2000);
    $(sendDiv).animate({
        'marginTop': '0px'
    }, 2000);
}

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
        input.setAttribute("onfocus", "focusing()");
        form.appendChild(input);
        var youAreDiv = document.createElement('div');
        youAreDiv.setAttribute("style", "margin-top: " + (($(window).height() / 2) - 30) + "px;height:20px;position: relative;");
        youAreDiv.setAttribute("id", "youarediv");
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
