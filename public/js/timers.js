//global variables
var counter = 0;
var timeleft;
$(document).ready(function() {
	start();
})
function start(){
	//timeleft = document.getElementById("time");
	var timestring = $("#time").text();
	console.log(typeof timestring);
	var hr = parseInt(timestring.substring(0,2));
	console.log(hr + " hrs");
	var minutes = parseInt(timestring.substring(4,6));
	console.log(minutes + " minutes");
	var seconds = parseInt(timestring.substring(7,9));
	console.log(seconds + " seconds");
	timeleft = hr * 3600 + minutes * 60 + seconds;
	console.log(timeleft);
	$("#time").html(convertSeconds(timeleft));
	
	function timer(){
      if(timeleft==0){
		timeleft = 0
	  }
	  else{
		timeleft--;
	  }
	  $("#time").html(convertSeconds(timeleft));
	}
	
	setInterval(timer, 1000);
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
