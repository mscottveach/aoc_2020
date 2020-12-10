var fs = require('fs');
var data = fs.readFileSync('input.txt',"utf8");

let blank_line = /\r\n\r\n/g;
let line_break = /\r\n/g;
let space = / /g;

let input_str = data.replace(blank_line,'\n').replace(line_break,'');
let input_ros = input_str.split('\n');

array_of_sets = input_ros.map((elem => new Set(elem)));
console.log(array_of_sets);
console.log(array_of_sets.reduce(function(accum_size,current_size) {
        return(accum_size + current_size.size);
    },0));


//console.log(input_ros);