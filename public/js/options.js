$(document).ready(function() {
	initializePage();
})

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
