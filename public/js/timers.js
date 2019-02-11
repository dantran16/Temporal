//global variables
var timer = false;
var time;
var counter = 100;


function start(){
	if(!timer){
		timer = true;
		countdown();
	}
}

function countdown(){
	document.getElementById("time").value = stringtimer(counter);
	counter--;
	time = setTimeout("countdown();", 1000);
	
}

function stop(){
	timer = false;
	clearTimeOut(time);
}

function clear(){
	timer = false;
	time = 0;
}

function stringtimer(nseconds){
	var hours = Math.floor(nseconds/3600);
	var minutes = Math.floor(nseconds / 60);
	var seconds = nseconds % 60;
	return hours + ":" minutes + ":" + seconds;
}