
// Scripts used to toggle options, select sound, preview sound
$(document).ready(function() {
	initializePage();
})

// save toggle states
function setNoti() {
    var pushSet = document.getElementById('setNoti');
    localStorage.setItem('setNoti', pushSet.checked);
}

function setVoice() {
    var voiceSet = document.getElementById('setVoice');
    localStorage.setItem('setVoice', voiceSet.checked);
}

//load toggle states
function loadSetOptions() {    
    var pushSet = JSON.parse(localStorage.getItem('setNoti'));
    var voiceSet = JSON.parse(localStorage.getItem('setVoice'));

    document.getElementById("setNoti").checked = pushSet;
    document.getElementById("setVoice").checked = voiceSet;
}
