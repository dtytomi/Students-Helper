
/**
 * Module dependencies.
 */
// require('./student');

var application_root= __dirname, 
    express = require('express'),
    path = require("path"),
    mongoose =require('mongoose');
var db = mongoose.createConnection('localhost', 'studentSchema');
var studentSchema = require('./model/students');
var Student = db.model('students', studentSchema);

var routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/students', routes.list);
app.get('/students/:id', routes.student);
app.post('/students', routes.create);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});