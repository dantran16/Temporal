
/*
 * GET newSessions page.
 */
var name;
var session = require('../session.json');
var key = null;
var newSession = {
	"name": null,
	"duedate": null,
	"time": null,
	"tasks": [{
		"name": null,
		"time": null,
		"duedate": null
	}
	]
};
var i;

exports.view = function(req, res){
  res.render('newSession');
};

exports.savename = function(req, res){
  name = req.query.sessionname;
  res.render('newSession');
}
exports.addtask = function(req,res){
	newSession.name = name;
	newSession.duedate = req.query.duedate;
	newSession.time = req.query.time;
	if(newSession.tasks[0].name == null){
		newSession.tasks[0].name = req.query.taskname;
		newSession.tasks[0].duedate = req.query.taskdate;
		newSession.tasks[0].time = req.query.tasktime;
	}
	for (i = 0; i < session.sessions.length; i++){
		if(name == session.sessions[i].name){
			key = i;
			break;
		}
    }
	if(key==null){
	  session.sessions.push(newSession);
	  key = session.sessions.length - 1;
	}
	console.log("The session name is " + session.sessions[key].name);
	var newTask = {
		"name": req.query.taskname,
		"time": req.query.tasktime,
		"duedate": req.query.taskdate,
	}
	
    console.log(newTask);
	if(newSession.tasks.length > 1){
	  session.sessions[key].tasks.push(newTask);
    }
	res.render('newSession',{
	  "sessionname": session.sessions[key].name,
	  "time": session.sessions[key].time,
	  "tasks": session.sessions[key].tasks,
	  "duedate": session.sessions[key].duedate,
	});
	key = null;
	name = null;
	newSession = {
		"name": null,
		"duedate": null,
		"time": null,
		"tasks": [{
			"name": null,
			"time": null,
			"duedate": null
	}
	]
};
};