
var swig = require('swig');
var express = require('express');
var app = express();


var routes = require('./routes/');
app.use(function(request, res, next) {
	console.log(request.url);
	next();
})

app.use('/', routes);

app.use(express.static('public'))


app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });





app.listen(3000,function(){
	console.log('app listening on port 3000;')
});