var fs = require('fs');
var students = [];


module.exports.init = function()
{
    return new Promise(function (resolve, reject) {
  
    fs.readFile("./test3/students.json", function (err, data) {
        if (err) {
            console.log(err.message);
            reject("Failure to read file students.json!");
        }
        else {
            students = JSON.parse(data);
            resolve(students);
        }
    })
    })
}



module.exports.getBSD = function()
{
    return new Promise(function (resolve, reject) {
        var i = 0;
        var BSD = [];
        //BSD =Object.create(students);
        for (var x = 0; x < students.length; x++) {
            if (students[x].program == 'BSD') {
                BSD[i] = students[x];
                i++;
            }
        }
        if (BSD.length == 0)
            reject("no results returned")
        else
            resolve(BSD);
    })
}

module.exports.highGPA = function()
{
    return new Promise(function (resolve, reject) {
       

        var BSD2;
        var BSD  = Object.create(students);
        
       BSD[0].gpa = 0
        for (var x = 0; x < students.length; x++) {
            if (BSD[0].gpa <students[x].gpa ) {
                BSD[0] = students[x];
             
            }
        }
       BSD2 = BSD[0]
        if (BSD2.length == 0)
            reject("no results returned")
        else
            resolve(BSD2);
    })
}
module.exports.allStudents = function()
{
    return new Promise(function (resolve, reject) {
      if(students.length> 0)
      {
        resolve(students);
      }
      else{
        reject("No results returned")
      }
    })
}