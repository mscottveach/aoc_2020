 var fs = require('fs');
var data = fs.readFileSync('input.txt',"utf8");

let blank_line = /\r\n\r\n/g;
let line_break = /\r\n/g;
let space = / /g;

let input_str = data.replace(blank_line,'\n').replace(line_break,' ').replace(space,',');
let input_ros = input_str.split('\n');

//input_ros is an array of strings that have been formatted neatly
//now, i'm going to turn them inmto objects and push them into an
//array of objects called passports.  each object in the array passport 
//will represent a single passport.

//I'm not sure I need to do this but I'm trying to force
//these two variables into a particular type.
let passports = [];
const a_passport = {
    hcl:'#ae17e1', 
    iyr:2013,
    eyr:2024,
    ecl:'brn',
    pid:760753108, 
    byr:1931,
    hgt:'179cm'
};

//sanity check the cleanup
//console.log(input_ros);

//map over teh array of string, create a new passport object for eqach string
//split the string by the comma, and take that new array of passport elements
//and splut them again on the colon. with the two halves of a key-value,
//pair add it to the newly created object and when i'm done i push it into the
//array of objects.
passports = input_ros.map((a_line) => {
    const pp = Object.create(a_passport);
    array_line = a_line.split(',');
    array_line.map((an_elem) => {
        kvp =  an_elem.split(':');
        
        pp[kvp[0]] = kvp[1];

    });
      return(pp);
//    passports.push(pp);
});

console.log(passports);