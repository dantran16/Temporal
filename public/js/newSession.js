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
		location.replace(location.href+"session/"+string);
	});
}

function newSession(){
	location.replace(location.href+"newSession");
}

function homePage(){
	location.replace(location.href);
} 

function openForm() {
  document.getElementById("newTask").style.display = "block";
}

function closeForm() {
  document.getElementById("newTask").style.display = "none";
}

function openOptions() {
  document.getElementById("optionsOpen").style.display = "block";
}

function closeOptions() {
  document.getElementById("optionsOpen").style.display = "none";
}


/*
$('.container-options img').on('click', function() {
    $(this).toggleClass('clicked');
});

function openOptions() {
  document.getElementById("container-options").style.height = "75px";
}
*/