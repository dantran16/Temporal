
/*
 * GET home page.
 */

var session = require('../session.json');
 
exports.view = function(req, res){
  res.render('index',{
	  "sessions": session.sessions,
  });
};

exports.newSession = function(req, res){
	
	//converting time from task time to a string
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
	var timestring = hrs + ':' + min + ':' + sec;
	console.log(timestring);
	
	//date
	var month = req.query.month;
	if(month < 10){
		month = "0" + req.query.month;
	}
	var day = req.query.day;
	if(day < 10){
		day = "0" + req.query.day;
	}
	var year = req.query.year;
	var datestring = month + "/" + day + "/" + year;
	console.log(datestring);
	
	var newSession = {
	"name": req.query.sessionname,
	"duedate": datestring,
	"time": timestring,
	"tasks": {
		"name": req.query.taskname,
		"time": req.query.tasktime,
		"duedate": datestring
	}
	
	};
	session.sessions.push(newSession);
	res.render('index',{
	  "sessions": session.sessions,
  });
};