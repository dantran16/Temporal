
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
	var newSession = {
	"name": req.query.sessionname,
	"duedate": req.query.taskdate,
	"time": req.query.tasktime,
	"tasks": [{
		"name": req.query.taskname,
		"time": req.query.tasktime,
		"duedate": req.query.taskdate
	}
	]
	};
	session.sessions.push(newSession);
	res.render('index',{
	  "sessions": session.sessions,
  });
};