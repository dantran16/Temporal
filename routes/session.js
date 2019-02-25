
/*
 * GET session page.
 */
var session = require('../session.json');
var key;
var i;
var name;

var totalTime;

/* -- save to JSON -- 
var fs = require('fs');
var data = fs.readFileSync('session.JSON');
var sessions = JSON.parse(data);
console.log(sessions);
/* -- END save to JSON -- */

/*
var totalTime;
time += sessionTime
 
for (i in sessionsObj.time) {
  x += "<h1>" + sessionsObj.time[i].time + "</h1>";
  for (j in sessionsObj.time[i].time) {
    x += sessionsObj.time[i].time[j];
  }
}
*/


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
/*
	//loop through object and add times
	for (i = 0; i < session.sessions.length; i++){
		if(time > 0){
			totalTime += session.sessions[i].time;
			break;
		}
  	}
	//update total session time 
	session.sessions[key].push(totalTime);
 */
	res.render('session',{
	  "sessionname": session.sessions[key].name,
	  "time": session.sessions[key].time,
	  "tasks": session.sessions[key].tasks,
	  "duedate": session.sessions[key].duedate,
	});

};