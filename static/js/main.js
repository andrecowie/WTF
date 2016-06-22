/**
 * Created by abcdre on 24/05/2016.
 */
function myFunc(){
	$('img.main').animate({marginTop: "-20%"}, 1000);
	setTimeout(function(){
		var i = document.createElement('form');
		i.setAttribute('action', "/");
		i.setAttribute('method', "post");	
		i.style.margin = '0 auto';
		i.style.width = '50%';
		i.style.textAlign = 'center';		

		var k = document.createElement('input');
		k.setAttribute('type', "text");
		k.setAttribute('placeholder', "U R");
		k.setAttribute('name', "youare");
		k.style.background = 'black';
		k.style.color = 'white';
		k.style.border = '0';
		k.style.textAlign = 'center';

		var x = document.createElement('div');
		i.appendChild(k);
		
		document.getElementsByTagName('body')[0].appendChild(i);
	},500);
};
