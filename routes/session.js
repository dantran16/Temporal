
/*
 * GET session page.
 */
var session = require('../session.json');
var key;
var i;
var name;
 
exports.view = function(req, res){
  name = req.params.name;
  console.log("The session name is " + name);
  for (i = 0; i < session.sessions.length; i++){
		if(name == session.sessions[i].name){
			key = i;
			break;
		}
  }
  
  res.render('session',{
	  "sessionname": session.sessions[key].name,
	  "time": session.sessions[key].time,
	  "tasks": session.sessions[key].tasks,
	  "duedate": session.sessions[key].duedate,
  });
};

exports.addtask = function(req,res){
	console.log("The session name is " + name);
	var newTask = {
		"name": req.query.taskname,
		"time": req.query.tasktime,
		"duedate": req.query.taskdate,
	};
    console.log(newTask);
	session.sessions[key].tasks.push(newTask);
  
	res.render('session',{
	  "sessionname": session.sessions[key].name,
	  "time": session.sessions[key].time,
	  "tasks": session.sessions[key].tasks,
	  "duedate": session.sessions[key].duedate,
	});
};