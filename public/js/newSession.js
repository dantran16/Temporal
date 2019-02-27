// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

function initializePage() {
	console.log("Javascript connected!");
	
	//function to make sessions click
	$(".sessions").click(function(e){
		e.preventDefault();
		var string = $(this).text();
		console.log(string);
		location.replace("/session/"+string);
	});
	
}

function newSession(){
	location.replace("newSession");
}

function homePage(){
	location.replace(location.href+"index");
} 

/* ---- New Task Card ---- */
function openNewTask() {
  document.getElementById("newTask").style.display = "block";
  document.getElementById("taskCardBackground").style.filter = "blur(4px) grayscale(20%)";
  document.getElementById("optionsOpen").style.display = "none";
}

function closeNewTask() {
  document.getElementById("newTask").style.display = "none";
  document.getElementById("taskCardBackground").style.filter = "none";
}
/* ---- END New Task Card ---- */

/* ---- New Session Card ---- */
function openNewSession() {
  document.getElementById("newSession").style.display = "block";
  document.getElementById("taskCardBackground").style.filter = "blur(4px) grayscale(20%)";
  document.getElementById("optionsOpen").style.display = "none";
}

function closeNewSession() {
  document.getElementById("newSession").style.display = "none";
  document.getElementById("taskCardBackground").style.filter = "none";
}
/* ---- END New Session Card ---- */

function togOptions() {
	var options = document.getElementById("optionsOpen");

	var chevron = document.getElementById("option-arrow-up");
	var openStatus = options.style.height = "200px";

	if (openStatus=true) {
		chevron.style.transform = "rotate(-90deg)";
	}

	if (options.style.height = "0px") {
		options.style.height = "200px";
	} else {
		option.style.height = "0px";
	}
}

function closeOptions() {
	document.getElementById("optionsOpen").style.height = "0px";
}

function openCalendar(){
	location.replace("calendar");
}

function openGoals(){
	location.replace("goals");
}

function openFavorites(){
	location.replace("favorites");
}

function goHome(){
	location.replace("index");
}

function logout(){
	location.replace("../..")
}

function addTask() {
	document.getElementById("newTask").style.display = "none";
	var url = location.href;
	location.replace(url + "/index");
	location.replace(url);
}
/*
function deleteRow() {
	var i = document.getElementById("Session");
	i.remove(i.selectedIndex);
}

function delteTask(){
  JSONArray array = new JSONArray();
  int aLength = this.length();

  for (int i=0; i<aLength.length; i++){
    


  }
}
*/

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


