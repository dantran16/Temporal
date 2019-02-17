// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
/*Calendar*/
$(document).ready(function () {
02
$('#calendar').eCalendar({
03
weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
04
months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
05
textArrows: {previous: '<', next: '>'},
06
eventTitle: 'Events',
07
url: '',
08
firstDayOfWeek: 0,
09
events: [
10
  {title: 'Event 1', description: 'Description 1', <a href="https://www.jqueryscript.net/time-clock/">date</a>time: new Date(2014, 7, 15, 17)},
11
  {title: 'Event 2', description: 'Description 2', datetime: new Date(2014, 7, 14, 16)},
12
  {title: 'Event 3', description: 'jQueryScript.Net', datetime: new Date(2014, 7, 10, 16)}
13
]});
14
});



/*calendar end*/
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
	location.replace("index")
}

/*
$('.container-options img').on('click', function() {
    $(this).toggleClass('clicked');
});

function openOptions() {
  document.getElementById("container-options").style.height = "75px";
}
*/