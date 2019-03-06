var url;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
  
  // GOOGLE ANALYTICS 
  $(".new-session").click(function(){
    ga("send", "event", "newsession", "click");
  });

  $("#Sessions").click(function(){
    ga("send", "event", "viewsessionA", "click");
  });

  $("#ABSessions").click(function(){
    ga("send", "event", "viewsessionB", "click");
  });

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
    var string = $(".sessionname", this).text();
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
  
  //refresh
  /*
    url = location.href;
	setInterval( function(){
		$('#time').load(document.URL + ' #time');
	}, 1000);
	*/
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
function next(){
  location.replace("/start")
}
function addTask() {
  document.getElementById("newTask").style.display = "none";
  var url = location.href;
  location.replace(url + "/index");
  location.replace(url);
}
/*
function deleteRow() {
  JSONOject jObject = new JSONOject( {{sessions}} );
  JSONArray array = jObject.getJSONArray(this);
  int length = array.length();
  JSONArray newOne = new JSONArray();
  

  for(int j=0; j<length.length; j++){
    JSONOject aObj = array.getJSONObject(j);
    newOne[j] = aObj.remove(aObj.selectedIndex)
    
  }
}
*/

function deleteTask(){

    var i = sessionStorage.getItem('taskId');
    document.getElementById('taskID').value = i; 
    sessionStorage.setItem('taskID', sessionStorage.removeItem(i));
    
    
} 


/*
Array.prototype.removeValue = function(name, value){
   var array = $.map(this, function(v,i){
      return v[name] === value ? null : v;
   });
   this.length = 0; //clear original array
   this.push.apply(this, array); //push all elements except the one we want to delete
}

session.sessions.removeValue('name', 'Albania');
*/