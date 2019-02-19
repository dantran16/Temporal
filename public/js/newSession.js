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
		location.replace("session/"+string);
	});
}

function newSession(){
	location.replace("newSession");
}

function homePage(){
	location.replace(location.href+"index");
} 

function openForm() {
  document.getElementById("newTask").style.display = "block";
}

function closeForm() {
  document.getElementById("newTask").style.display = "none";
}

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
function addSession(){
	//grab data
	var sname = document.getElementById("sName").value;
	console.log(sname);
	var time = document.getElementById("time").value;
	console.log(time);
	var date = document.getElementById("date").value;
	console.log(date);
	
	//file reader
	
	//make a if statement to make sure session has a name
	//make a if statement to check the the time works
	//make a if statement to check the date works
	//then goHome() 
	//goHome();
}

function addTask() {
  document.getElementById("newTask").style.display = "none";
  
  //location.replace(location.href);
}

/*
$('.container-options img').on('click', function() {
    $(this).toggleClass('clicked');
});

function openOptions() {
  document.getElementById("container-options").style.height = "75px";
}
*/