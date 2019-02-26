
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
	
	//converting time from task time to a string
	var seconds = req.query.hour*3600 + req.query.minute*60;
	var hrs = Math.floor(seconds/3600);
	if(hrs < 10){
		var seconddigit = hrs;
		hrs = '0' + seconddigit;
	}
	var remainingseconds = seconds % 3600;
	var min = Math.floor(remainingseconds/60);
	if(min < 10){
		var seconddigit = min;
		min = '0' + seconddigit;
	}
	var sec = "00";
	var timestring = hrs + ':' + min + ':' + sec;
	
	var newTask = {
		"name": req.query.taskname,
		"time": timestring,
		"duedate": req.query.taskdate,
	};
    console.log("New task" + newTask);
	session.sessions[key].tasks.push(newTask);
  
	res.render('session',{
	  "sessionname": session.sessions[key].name,
	  "time": session.sessions[key].time,
	  "tasks": session.sessions[key].tasks,
	  "duedate": session.sessions[key].duedate,
	});
};