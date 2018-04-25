var express = require('express');
var http = require('http');
var path = require('path');
var handlebars  = require('express-handlebars');



var app = express();

require('./router')(app);





app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));



var hbs = handlebars.create({
	defaultLayout: 'Main'
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




app.use(express.static(path.join(__dirname, 'static')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
