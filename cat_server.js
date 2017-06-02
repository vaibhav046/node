//var http=require('http');
var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var mongoose=require('mongoose');

var mongoURI = "mongodb://localhost:27017/test";
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

var catRoutes=require('./routes/cats_routes.js')(app);
var server=app.listen(3000,function(){
  console.log('Server running at 127.0.0.1:3000');
});
