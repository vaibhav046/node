var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));


var petRoutes=require('./routes/pet_routes.js')(app);
var server=app.listen(3002,function(){
  console.log('Server running at 127.0.0.1:3002');
});
