var express = require('express');
var app = express();


app.use(function(req,res,next){
	console.log(req.method,req.path);
	next();
})

app.use('/special/', function(req,res,next){
	console.log("you reached the special area");	
	next();
	console.log(res.statusProperty);
})

app.get('/special',function(req,res){
	res.statusProperty = res.statusCode;
	res.send('special');
})

app.get('/news',function(req,res){
	res.send('here is the news page');
})

app.get('/is-anybody-in-there',function(req,res){
	res.send('here is is-anybody-in-there page');
})



// app.post()

app.listen(3000,function(){
	console.log('app listening on port 3000;')
});