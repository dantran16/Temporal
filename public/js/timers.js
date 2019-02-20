$(document).ready(function() {
	initializePage();
})

//global variables
var counter = 0;
var timeleft;
var alarmduration = 2;
var interval;

// $(document).ready(function() {
// 	start();
// })
function start(){
	//timeleft = document.getElementById("time");
	var timestring = $("#time").text();
	console.log(timestring);
	var hrstring = timestring.substring(0,2);
	console.log(hrstring + " is string of hrs");
	var hr = parseInt(hrstring);
	console.log(hr + " hrs");
	var minstring = timestring.substring(3,5);
	console.log(minstring + " is string of minutes");
	var minutes = parseInt(minstring);
	console.log(minutes + " minutes");
	var secstring = timestring.substring(6,8);
	console.log(secstring + " is string of seconds");
	var seconds = parseInt(secstring);
	console.log(seconds + " seconds");
	timeleft = hr * 3600 + minutes * 60 + seconds;
	console.log(timeleft);
	$("#time").html(convertSeconds(timeleft));
	
	function timer(){
      if(timeleft==0){
		timeleft = 0;
		var audio = document.getElementById("audio");
		if(counter < alarmduration){
		  audio.play();
		  counter++;
		  console.log(counter);
		}
		else{
	      audio.pause();
		  counter=0;
		  clearInterval(interval);
		}
	  }
	  else{
		timeleft--;
	  }
	  $("#time").html(convertSeconds(timeleft));
	}
	
	interval = setInterval(timer, 1000);
}

function pause(){
	clearInterval(interval);
}

function convertSeconds(seconds){
	var hrs = Math.floor(seconds/3600);
	if(hrs < 10){
		var seconddigit = hrs;
		hrs = '0' + seconddigit;
	}
	var remainingseconds = seconds % 3600;
	var min = Math.floor(remainingseconds/60);
	if(min < 10){
		var seconddigit = min;
		min = '0' + seconddigit;
	}
	var sec = remainingseconds % 60;
	if(sec < 10){
		var seconddigit = sec;
		sec = '0'+ seconddigit;
	}
	var string = hrs + ':' + min + ':' + sec;
	return string;
}



function startNextPage() {
	location.replace("startSession");
	//start();
}