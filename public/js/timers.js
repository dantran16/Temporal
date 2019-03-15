$(document).ready(function() {
	initializePage();
	var running = $("#running").text();
	console.log(running);
	if(running == "true"){
		$("#startTimer").hide();
		$("#stopTimer").show();
	}
	else{
		$("#stopTimer").hide();
		$("#startTimer").show();
	}
})

//global variables
var counter = 0;
var timeleft;
var alarmduration = 3;
var interval;
var url = null;
var paused = true;

function start(){
	//swap button for pause
	document.getElementById("time").style.color = "red";

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
		var audio = toggleSound();//toggleSound() uses selected sound option from drop down//document.getElementById("sirenTest"); //original b4 chang "audio"
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

	//swap pause with START on click
	document.getElementById("time").style.color = "#283E51";
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

function starttime(){

	url = window.location.href.split('?')[0];
	console.log("the url is " + url);
	location.replace(url + "/starttime");
	setTimeout(function(){
		location.replace(url);
	}, 100);
}

function pausetime(){

	url = window.location.href.split('?')[0];
	console.log("the url is " + url);

	//swap color for start
	document.getElementById("time").style.color = "#283E51";
	
	location.replace(url + "/pausetime");
	setTimeout(function(){
		location.replace(url);
	}, 10);
}

//toggle stopTimer to show and hide start
$("#startTimer").click(function(){
	starttime();

});

//toggle startTimer to show and hide stop
$("#stopTimer").click(function(){
	pausetime();
});
