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
  
  //set the min for the date to be current date
  var today = new Date();
  var ddtoday = today.getDate();
  if(ddtoday < 10){
    ddtoday = '0' + ddtoday;
  }
  var mmtoday = today.getMonth() + 1;
  if(mmtoday < 10){
    mmtoday = '0' + mmtoday;
  }
  var yytoday = today.getFullYear();
  today = yytoday + '-' + mmtoday + '-' + ddtoday;
  document.getElementById("taskdate").setAttribute("min", today);
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
  closeOptions();
}

function closeNewTask() {
  document.getElementById("newTask").style.display = "none";
  document.getElementById("taskCardBackground").style.filter = "none";
  document.getElementById("taskname").value = "";
  document.getElementById("timeInputBox").value = "";
  document.getElementById("taskdate").value = "";
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
  document.getElementById("sessionname").value = "";
  document.getElementById("taskname").value = "";
  document.getElementById("timeInputBox").value = "";
  document.getElementById("taskdate").value = "";
}
/* ---- END New Session Card ---- */



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