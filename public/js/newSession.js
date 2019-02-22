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
	
	//function to initialize due date
	var date = new Date();
	var day = date.getDate();
	if(day<10){
		day = "0"+year;
	}
	var month = date.getMonth() + 1;
	if(month<10){
		month = "0" + month;
	}
	var year = date.getFullYear();
	var datestring = month + "/" + day + "/" + year;
	if(document.getElementById("duedate").innerHTML == "Due by: "){
		document.getElementById("duedate").innerHTML = "Due by: " + datestring;
	}
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

function openOptions() {
  document.getElementById("optionsOpen").style.display = "block";
  document.getElementById("finishSession").style.bottom = "195px";
}

function closeOptions() {
  document.getElementById("optionsOpen").style.display = "none";
  document.getElementById("finishSession").style.bottom = "75px";
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
$('.container-options img').on('click', function() {
    $(this).toggleClass('clicked');
});

function openOptions() {
  document.getElementById("container-options").style.height = "75px";
}
*/