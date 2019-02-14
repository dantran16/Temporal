/*
 * Implementing new task
 */

var session = require('../session.json');
var key;
var i;
 
exports.view = function(req, res){
  var name = req.params.name;
  console.log("The session name is " + name);
  for (i = 0; i < session.sessions.length; i++){
		if(name == session.sessions[i].name){
			key = i;
			break;
		}
  }
  
  var newTask = {
	  "name": document.getElementById("name"),
	  "time": document.getElementById("time")
  };
  
  session.sessions[key].tasks.push(newTask);
  
  res.render('session',{
	  "sessionname": session.sessions[key].name,
	  "time": session.sessions[key].time,
	  "tasks": session.sessions[key].tasks
  });
};