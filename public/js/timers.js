$(document).ready(function() {
	initializePage();
})

//global variables
var counter = 0;
var timeleft;
var alarmduration = 2;
var interval;

function start(){
	//swap button for pause
	document.getElementById("startTimer").style.display = "none";
	document.getElementById("stopTimer").style.display = "block";

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
	document.getElementById("startTimer").style.display = "block";
	document.getElementById("stopTimer").style.display = "none";

	document.getElementById("time").style.color = "lightgreen";
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

function toggleSound() {

	var audioFiles = document.getElementById("audioFiles");

    if (audioFiles.options[audioFiles.selectedIndex].id == "default") {
        var audioPath = document.getElementById("defaultSound");
        audioPath.play();
    }
    else if(audioFiles.options[audioFiles.selectedIndex].id == "classicAlarm")
    {
        var audioPath = document.getElementById("classicSound");
        audioPath.play();
    }
    else if(audioFiles.options[audioFiles.selectedIndex].id == "siren")
    {
        var audioPath = document.getElementById("sirenSound");
        audioPath.play();
    }
    else if(audioFiles.options[audioFiles.selectedIndex].id == "ambiance")
    {
        var audioPath = document.getElementById("ambianceSound");
        audioPath.play();
    }
    else if(audioFiles.options[audioFiles.selectedIndex].id == "alien")
    {
        var audioPath = document.getElementById("alienSound");
        audioPath.play();
    }
    document.getElementById("pauseSound-btn").style.opacity = "0.8";
    return audioPath;
}

$(function() {
    $('#audioFiles').change(function() {
        localStorage.setItem('soundOption', this.value);
    });
    if(localStorage.getItem('soundOption')){
        $('#audioFiles').val(localStorage.getItem('soundOption'));
    }
});

function pauseTestSound() {
	toggleSound().pause();
	document.getElementById("pauseSound-btn").style.opacity = "0.2";
}

/*
$(document).addEventListener('DOMContentLoaded', function () {
   var input = document.getElementById('audioFiles');
   if (localStorage['audioFiles']) { // if audioFile is set
       input.value = localStorage['audioFiles']; // set the value
   }
   input.onchange = function () {
        localStorage['audioFiles'] = this.value; // change localStorage on change
    }
});
*/

