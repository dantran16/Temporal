
/*
 * GET home page.
 */
var session = require('../session.json');
 
exports.view = function(req, res){
  res.render('index',{
	  "sessions": session.sessions,
  });
};