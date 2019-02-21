
/*
 * GET newSessions page.
 */
var name;
var session = require('../session.json');
var key = session.sessions.length;

exports.view = function(req, res){
  res.render('newSession');
};

exports.addtask = function(req,res){
	
	var newSession = {
		"name": req.query.sessionname,
		"duedate": req.query.duedate,
		"time": req.query.time,
		"tasks": [{
			"name": "new task",
			"time": "00:00:00",
			"duedate": "02/19/2019",
			}
		]
	};
	
	name = req.query.name;
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