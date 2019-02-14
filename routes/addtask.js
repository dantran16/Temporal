/*
 * Implementing new task
 */

var session = require('../session.json');
var key;
var i;
 
exports.addtask = function(req, res){
  var name = req.query.sessionname;
  console.log("The session name is " + name);
  for (i = 0; i < session.sessions.length; i++){
		if(name == session.sessions[i].name){
			key = i;
			break;
		}
  }
  
  var newTask = {
	  "name": req.query.taskname,
	  "time": req.query.tasktime
  };
  
  session.sessions[key].tasks.push(newTask);
  
  res.render('session/:name',{
	  "sessionname": session.sessions[key].name,
	  "time": session.sessions[key].time,
	  "tasks": session.sessions[key].tasks
  });
};