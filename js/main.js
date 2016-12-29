/*var button = document.getElementById('button');
button.onclick = function(){
	for(i = 0; i < 1; i++){
		var tr1 = document.getElementById('tr');
		tr1.innerHTML += "<td><p>some text</p></td>"
	}
}

var buttonp = document.getElementById('buttonpr');
buttonp.onclick = function(){
	var paragraf = document.getElementsByClassName('paragraf');
	paragraf[0].style.color = "red";
	paragraf[2].style.color = "red";
	paragraf[3].style.color = "red";
	paragraf[6].style.color = "red";
}

var li = document.getElementsByTagName('li');
buttonul.onclick = function(){
	for(i = 0; i < li.length; i++){
		li[i].innerHTML = '<img src="img/'+ i +'.jpg">';
	}
}*/


var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var btn4 = document.getElementById('button4');
var btn5 = document.getElementById('button5');


var btn1parent = btn1.parentNode;
btn1.onclick = function(){
	resetColor();
	btn1parent.nextSibling.style.background = 'red';
}



var btn2parent = btn2.parentNode;
btn2.onclick = function(){
	resetColor();
	btn2parent.nextSibling.style.background = 'red';
	btn2parent.previousSibling.style.background = 'green';
}

var btn3parent = btn3.parentNode;
btn3.onclick = function(){
	resetColor();
	btn3parent.nextSibling.style.background = 'purple';
	btn3parent.previousSibling.style.background = 'black';
}

var btn4parent = btn4.parentNode;
btn4.onclick = function(){
	resetColor();
	btn4parent.nextSibling.style.background = 'blue';
	btn4parent.previousSibling.style.background = 'grey';
}

var btn5parent = btn5.parentNode;
btn5.onclick = function(){
	resetColor();
	
	btn5parent.previousSibling.style.background = 'yellow';
	
}


var td = document.getElementsByTagName('td');
function resetColor(){
	for(i=0; i<td.length; i++){
		td[i].style.background = 'white';
	}
}


var rotate = document.getElementById('button');
var line = document.getElementById('line');
//line.setAttribute('style','width:60px;height:200px;background-color:red;margin: 20px 0 0 126px;');

var counter = 0;
rotate.onclick = function(){
	if(counter == 0){
		counter = 45;
		line.setAttribute('style','transform: rotate('+ counter +'deg); transition: all 2s');
	}else if(counter >= 45){
		counter += 45;
		line.setAttribute('style','transform: rotate('+ counter +'deg); transition: all 2s');
	}else(counter == 360){
		counter = 0;
	}
}