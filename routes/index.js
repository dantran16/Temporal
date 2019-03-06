var session = require('../session.json'); 
/*
exports.view = function(req, res){
  session['viewAlt'] = false;
  res.render('index',{
	  "sessions": session.sessions,
  });
}; //this DOES NOT

exports.viewAlt = function(req, res){
  session['viewAlt'] = true;
  res.render('index',{
	  "sessions": session.sessions,
  });
}; //this DOES NOT
*/
exports.view = function(req, res){
  session['viewAlt'] = false;
  res.render('index', session);
}; //this works

exports.viewAlt = function(req, res){
  session['viewAlt'] = true;
  res.render('index', session);
}; //this works

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
	
	
	var newSession = {
	"name": req.query.sessionname,
	"duedate": req.query.taskdate,
	"time": timestring,
	"tasks": {
		"name": req.query.taskname,
		"time": req.query.tasktime,
		"duedate": req.query.taskdate
	}
	
	};
	session.sessions.push(newSession);
	res.render('index',{
	  "sessions": session.sessions,
  });
};