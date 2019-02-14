
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var newSession = require('./routes/newSession');
var session = require('./routes/session');
var calendar = require('./routes/calendar');
var goals = require('./routes/goals');
var favorites = require('./routes/favorites');

var login = require('./routes/login');

var addtask = require('./routes/addtask');
var settings = require('./routes/settings');
var notifications = require('./routes/notifications');
var account = require('./routes/account');
var about = require('./routes/about');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
// Example route
// app.get('/users', user.list);
app.get('/index', index.view);
app.get('/newSession', newSession.view);
app.get('/session/:name', session.view);
app.get('/goals', goals.view);
app.get('/favorites', favorites.view);
app.get('/calendar', calendar.view);
app.get('/newSession/addtask', addtask.addtask);
app.get('/session/:name/addtask', addtask.addtask);

app.get('/settings', settings.view); 
app.get('/notifications', notifications.view);
app.get('/account', account.view);
app.get('/about', about.view);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
