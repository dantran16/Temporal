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

function openOptions() {
  document.getElementById("container-options-open").style.display = "block";
}

function closeOptions() {
  document.getElementById("container-options-open").style.display = "none";
}

function openOptions_2() {
  document.getElementById("container-options-open").style.top = "685px";
}

/*
$('.container-options img').on('click', function() {
    $(this).toggleClass('clicked');
});

function openOptions() {
  document.getElementById("container-options").style.height = "75px";
}
*/