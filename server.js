//Test-3
// Name: Tanvir Singh
//Student id: 104642210
//cyclic url :  https://erin-dead-python.cyclic.app/
const { Console } = require("console");
const express = require("express"); // Include express.js module
const app = express();
var path = require("path");
var data = require('./test3/test3_moduleA.js')
var HTTP = process.env.PORT || 8080;  
const exphbs = require("express-handlebars");
app.use(express.static(path.join(__dirname, 'test3/public')))
app.engine('.hbs', exphbs.engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
   
   res.render("home");
})


app.get('/BSD', function(req,res)
{
    data.getBSD().then(function(message)
    {
      res.render("students",{data:message})
    }).catch(function (message) {
        res.json(`Error: ${message}`)
    })
})
app.get('/allStudents', function(req,res)
{
    data.allStudents().then(function(message)
    {
      res.render("students",{data:message})
    }).catch(function (message) {
        res.json(`Error: ${message}`)
    })
})

app.get('/highGPA', function(req,res)
{
    data.highGPA().then(function(msg)
    {
    res.render("student",{data:msg})
        
    }).catch(function(err)
    {
        res.status(500).send("Error in displaying results!");
    })
})


app.get(function (req, res) {
    res.status(404).send("Page not Found")
})

data.init().then(function (message) {
app.listen(HTTP, function () {

    console.log("Express http server listening on: " + HTTP);
});
}).catch(function (err) {
    console.log("Error: " + err);
})
