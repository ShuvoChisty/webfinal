var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require("mongoose");


var User = require('./models/Users.js');

var db_url = "mongodb://"+process.env.IP+":27017";

mongoose.connect(db_url+"/finals");
mongoose.connection.on('error', function(error){
  console.log('Could not connect to MongoDB');
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function(request,response){
    response.render('index.ejs');
});

app.post('/new-user', function(request,response){
    var new_user = new User({
         name: request.body.name,
         email: request.body.email,
         age: request.body.age
    });
    new_user.save(function(err, data) {
        if (err)
            return response.status(400).json({error: err});
        console.log(data);
        response.status(200).json({
            data: data
        });
    })
});

app.get('/list', function(request,response){
    response.render('list.ejs');
});


app.get('/single', function(request,response){
    response.render('single.ejs');
});


server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
});