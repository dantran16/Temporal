// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
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
