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
    
connection.connect(function(err){
    if(err){
      console.log("Error connecting to Db");
      return;
    }
    console.log("Connection established");
  });
  
app.listen(port);
console.log('The server is running at http://localhost:'+port+'/');