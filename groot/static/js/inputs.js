var editFirstMessage = function(divId) {
    console.log(divId);
    if (divId.children[1] == undefined) {
        divId.children[0].classList.toggle('hidden');
    } else {
        divId.children[1].classList.toggle('hidden');
    }
}
var submitNewFirstMessage = function(submitButton, number, divPar) {
    var childinps, hasChildElements;
    var data = {

    }
    hasChildElements = false;
    for (child = submitButton.parentNode.firstChild; child; child = child.nextSibling) {
        if (child.nodeName == "DIV") {
            id = child.children[0].id;
            val = child.children[0].value;
            data[id] = val;
        }
    }
    if (number == undefined) {
        $.ajax({
            type: 'POST',
            url: '/newFirstMessage',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify(data, null, '\t'),
            success: function(result) {
                var response = JSON.parse(result);
                console.log(response);
            }
        })
    } else {
        data['number'] = number;
        data['name'] = divPar.id;
        console.log(data);
        $.ajax({
            type: 'POST',
            url: '/newFirstMessage',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify(data, null, '\t'),
            success: function(result) {
                var response = JSON.parse(result);
                console.log(response);
            }
        })
    }
}
