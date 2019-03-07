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

//==================================================//

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
	var newTask = {
		"name": req.query.taskname,
		"time": timestring,
		"duedate": req.query.taskdate
	}
	
	var newSession = {
	"name": req.query.sessionname,
	"duedate": req.query.taskdate,
	"time": timestring,
	"tasks": [{
		"name": "2321321",
		"time": "321321",
		"duedate": "321312"
		}
		]
	};
	newSession.tasks[0] = newTask; 
	console.log(newSession);
	session.sessions.push(newSession);
	res.render('index',{
	  "sessions": session.sessions,
	});
};

exports.deletesession = function(req,res){
	
	for(var i = 0; i < session.sessions.length; i++){
		if(req.params.taskname == session.sessions[key].tasks[i].name){
			session.sessions[key].tasks.splice(i, 1);
			break;
		}
	}
	res.render('index',{
	  "sessions": session.sessions,
	});
}



