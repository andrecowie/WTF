/**
 * Created by abcdre on 24/05/2016.
 */
function myFunc(){
	$('div.shadow').animate({marginTop: "-150%"}, 1000);
	setTimeout(function(){
		element = document.getElementById("shadow");
		element.parentNode.removeChild(element)}, 1000);
	setTimeout(function(){
		var l = document.createElement('div');
		l.setAttribute('class', "col-xs-4 col-xs-offset-4");
		l.setAttribute('style', "margin-top:  20%");

		var i = document.createElement('form');
		i.setAttribute('id', "lower");
		i.setAttribute('action', "/");
		i.setAttribute('method', "post");
		i.style.margin = '0 auto';
		i.style.width = '50%';
		i.style.textAlign = 'center';

		var k = document.createElement('input');
		k.setAttribute('type', "text");
		k.setAttribute('placeholder', "UR");
		k.setAttribute('name', "youare");
		k.setAttribute('class', 'form-control');
		k.style.background = 'black';
		k.style.color = 'white';
		k.style.border = '0';
		k.style.textAlign = 'center';
		i.appendChild(k);
		l.appendChild(i);

		document.getElementsByTagName('body')[0].appendChild(l);
	},750);
};
