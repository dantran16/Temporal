
// Scripts used to toggle options, select sound, preview sound
$(document).ready(function() {
	initializePage();
})

function toggleOpt() {
    var navSize = document.getElementById("optionsOpen").style.height;
    if (navSize == "200px") {
        return closeOptions();
    }
    return openOptions();
}

function openOptions() {
	var options = document.getElementById("optionsOpen");

	var chevron = document.getElementById("option-arrow-up");
	var openStatus = options.style.height = "200px";

	if (openStatus=true) {
		chevron.style.transform = "rotate(-90deg)";
	}
}

function closeOptions() {
	document.getElementById("optionsOpen").style.height = "51px";

	var options = document.getElementById("optionsOpen");
	var chevron = document.getElementById("option-arrow-up");
	var openStatus = options.style.height = "51px";

	if (openStatus=true) {
		chevron.style.transform = "rotate(90deg)";
	}
}

// save toggle states
function toggleNoti() {
    var pushBox = document.getElementById('pushNoti');
    localStorage.setItem('pushNoti', pushBox.checked);
}

function toggleVoice() {
    var voiceBox = document.getElementById('voiceNoti');
    localStorage.setItem('voiceNoti', voiceBox.checked);
}

//load toggle states
function loadNotiOptions() {    
    var pushBox = JSON.parse(localStorage.getItem('pushNoti'));
    var voiceBox = JSON.parse(localStorage.getItem('voiceNoti'));

    document.getElementById("pushNoti").checked = pushBox;
    document.getElementById("voiceNoti").checked = voiceBox;
}

//sound selection -> sends to start() for audioPath().play()
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
