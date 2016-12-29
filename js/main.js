var button = document.getElementById('button');
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
}


