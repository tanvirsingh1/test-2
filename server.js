const { Console } = require("console");
const express = require("express"); // Include express.js module
const app = express();
var path = require("path");
var data = require('./test2/test2_moduleA.js')
var HTTP = process.env.PORT || 8080;  


app.get('/', function (req, res) {
    let text = "<h2> Declaration </h2>";
    text += "<p>I declare that this assignment is my own work in accordance with Seneca Academic Policy.<br>No part of this assignment has been copied manually or electronically from any other source <br>(including web sites) or distributed to other students.<br></p>";
text+= "<p>Name : <b><mark>Tanvir Singh</mark></b></p>"
text+="<p>Student Number: <b><mark>104642210</mark></b></p>"
text+= "<a href = './BSD'> Click to visit BSD students </a> <br>"
text+= "<a href = './highGPA'> Click to see who has the highest GPA </a> <br>"
   res.send(text)
})

app.get('/BSD', function(req,res)
{
data.getBSD().then(function(message)
{
  res.json(message);
}).catch(function (message) {
    res.json(`Error: ${message}`)
})
})

app.get('/highGPA', function(req,res)
{
    data.highGPA().then(function(message)
    {
       // res.json(message);
    var data = JSON.stringify(message);
     let text = "<h2> Highest GPA</h2>";
     text += "student ID:" + "<span>" + message[0].studId +"</span><br>"
     text += "Name:" + "<span>" + message[0].name +"</span><br>"

     text += "Program:" + "<span>" + message[0].program +"</span><br>"
     text += "GPA:" + "<span>" + message[0].gpa +"</span><br>"
   res.send(text);
    }).catch(function (message) {
        res.json(`Error: ${message}`)
    })
})


app.get(function (req, res) {
    res.status(404).send("Page not Found")
})

data.init().then(function (message) {
app.listen(HTTP, function () {

    console.log("Express http server listening on: " + HTTP);
    //console.log(message)
});
}).catch(function (err) {
    console.log("Error: " + err);
})
