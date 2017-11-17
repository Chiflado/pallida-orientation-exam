'use strict';

var express = require('express');
var mysql = require('mysql');
var app = express();
var connection = mysql.createConnection({
    host: "localhost",
    user: "'root'",
    password: "root",
    database: "licenceplates"
});

const port = 8080; 

app.use('/assets', express.static('./assets'));
app.use(express.json());



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');    
});

app.get('/search', function (req, res){
    var param = req.query.q;
    if(param === undefined){
        res.json({error : 'Please provide a licence plate number!'});
    } else if(param){
       connection.query(`SELECT * FROM licence_plates
                         WHERE plate = "${req.query.q}";`, function(err,data){
                             if(err){
                                res.json({error : err.toString()})
                             } else{
                                res.json(data);
                             }
                         });
    }
});

app.get('/search/:brand', function (req, res){
    connection.query(`SELECT * FROM licence_plates
    WHERE car_brand = "${req.params.brand}";`, function(err,data){
        if(err){
            res.json({error : err.toString()})
        } else{
            res.json(data)
        } 
    });
})

connection.connect(function(err){
    if(err){
      console.log("Error connecting to Db");
      return;
    }
    console.log("Connection established");
  });
  
app.listen(port);
console.log('The server is running at http:ocalhost:'+port+'/');