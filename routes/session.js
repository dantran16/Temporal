

/*
 * GET home page.
 */
var session = require('../session.json');
 
exports.view = function(req, res){
  var name = req.params.name;
  console.log("The session name is " + name);
  res.render('session',{
	  "sessions": session.sessions,
	  "sessionname": name
  });
};