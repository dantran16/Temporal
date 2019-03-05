/*
/*
/* GET start page.
*/
// exports.start = function(request, response){
// 	response.render('start')
// }
/*
 * GET session page.
 */
var session = require('../session.json');
var key;
var i;
var name;

var totalTime;

//global variables for timer
var timeleft;
var interval;
/* -- save to JSON -- 
var fs = require('fs');
var data = fs.readFileSync('session.JSON');
var sessions = JSON.parse(data);
console.log(sessions);
/* -- END save to JSON -- */



//function for converting seconds into a xx:xx:xx string
function convertSeconds(seconds){
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
	var sec = remainingseconds % 60;
	if(sec < 10){
		var seconddigit = sec;
		sec = '0'+ seconddigit;
	}
	var string = hrs + ':' + min + ':' + sec;
	return string;
}

exports.view = function(req, res){
  
	name = req.params.name;
	console.log("The session name is " + name);
	for (i = 0; i < session.sessions.length; i++){
		if(name == session.sessions[i].name){
			key = i;
			break;
		}
	}
  
	//time
	var timestring = session.sessions[key].time;
	console.log(timestring);
	var hrstring = timestring.substring(0,2);
	console.log(hrstring + " is string of hrs");
	var hr = parseInt(hrstring);
	console.log(hr + " hrs");
	var minstring = timestring.substring(3,5);
	console.log(minstring + " is string of minutes");
	var minutes = parseInt(minstring);
	console.log(minutes + " minutes");
	var secstring = timestring.substring(6,8);
	console.log(secstring + " is string of seconds");
	var seconds = parseInt(secstring);
	console.log(seconds + " seconds");
	timeleft = hr * 3600 + minutes * 60 + seconds;
	console.log(timeleft);
	
	res.render('session',{
	  "sessionname": session.sessions[key].name,
	  "time": session.sessions[key].time,
	  "tasks": session.sessions[key].tasks,
	  "duedate": session.sessions[key].duedate,
	});
};

exports.addtask = function(req,res){
	
	console.log("The session name is " + name);
	//converting time from new task time to a string
	var hrs = req.query.hour;
	if(hrs < 10){
		var seconddigit = hrs;
		hrs = '0' + seconddigit;
	}
	var min = req.query.minute;
	if(min < 10){
		var seconddigit = min;
		min = '0' + seconddigit;
	}
	var sec = "00";
	var tasktimestring = hrs + ':' + min + ':' + sec;
	console.log(tasktimestring);
	
	//adding time from overall time
	hrs = req.query.hour;
	min = req.query.minute;
	var tasktimeinseconds = hrs * 3600 + min * 60;
	var sessiontimeinseconds = 0;
	for(var k = 0; k < session.sessions[key].tasks.length; k++){
		var timestring = session.sessions[key].tasks[k].time;
		var hrstring = timestring.substring(0,2);
		var hr = parseInt(hrstring);
		var minstring = timestring.substring(3,5);
		var minutes = parseInt(minstring);
		var secstring = timestring.substring(6,8);
		var seconds = parseInt(secstring);
		sessiontimeinseconds += hr * 3600 + minutes * 60 + seconds;
	}
	
	session.sessions[key].time = convertSeconds(sessiontimeinseconds + tasktimeinseconds);
	
	//updating session date if date is earlier
	//will fill out later
	
	var newTask = {
		"name": req.query.taskname,
		"time": tasktimestring,
		"duedate": req.query.taskdate,
	};

	console.log(newTask);
	session.sessions[key].tasks.push(newTask);

	//loop through object and add times
	for (i = 0; i < session.sessions.length; i++){
		if(time > 0){
			totalTime += session.sessions[i].time;
			break;
		}
  	}
	//update total session time 
	session.sessions[key].push(totalTime);
 
	res.render('session',{
	  "sessionname": session.sessions[key].name,
	  "time": session.sessions[key].time,
	  "tasks": session.sessions[key].tasks,
	  "duedate": session.sessions[key].duedate,
	});

};

exports.starttime = function(req,res){
	var timestring = session.sessions[key].time;
	console.log(timestring);
	var hrstring = timestring.substring(0,2);
	console.log(hrstring + " is string of hrs");
	var hr = parseInt(hrstring);
	console.log(hr + " hrs");
	var minstring = timestring.substring(3,5);
	console.log(minstring + " is string of minutes");
	var minutes = parseInt(minstring);
	console.log(minutes + " minutes");
	var secstring = timestring.substring(6,8);
	console.log(secstring + " is string of seconds");
	var seconds = parseInt(secstring);
	console.log(seconds + " seconds");
	
	timeleft = hr * 3600 + minutes * 60 + seconds;
	console.log(timeleft);
	
	function timer(){
		if(timeleft==0){
			timeleft = 0;
			clearInterval(interval);
		}
		else{
			timeleft--;
		}
		session.sessions[key].time = convertSeconds(timeleft);
		res.render('session',{
			"sessionname": session.sessions[key].name,
			"time": session.sessions[key].time,
			"tasks": session.sessions[key].tasks,
			"duedate": session.sessions[key].duedate,
		});
	}
	interval = setInterval(timer, 1000);
};

exports.pausetime = function(req, res){
	clearInterval(interval);
	res.render('session',{
		"sessionname": session.sessions[key].name,
		"time": session.sessions[key].time,
		"tasks": session.sessions[key].tasks,
		"duedate": session.sessions[key].duedate,
	});
}



