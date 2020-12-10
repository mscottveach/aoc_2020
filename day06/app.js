var fs = require('fs');
var data = fs.readFileSync('input.txt',"utf8");

let blank_line = /\r\n\r\n/g;
let line_break = /\r\n/g;
let space = / /g;

let input_str = data.replace(blank_line,'\n').replace(line_break,'');
input_ros = input_str.split('\n');
//console.log(input_ros);

array_of_sets = input_ros.map((elem => new Set(elem)));
console.log(array_of_sets.reduce(function(accum_size,current_size) {
        return(accum_size + current_size.size);
    },0));

//PART TWO

//need to set the answers earlier
let input_str_spaces = data.replace(blank_line,'\n').replace(line_break,' ');
input_ros = input_str_spaces.split('\n');
//now each element is a string of individual answers separated by space
//we want to turn each persons answer into a set
let answer_sets = input_ros.map((elem => (elem.split(' ').map((subelem => new Set(subelem))))));
//now answer_sets is an array of an array of sets
//console.log(answer_sets);
intersections = answer_sets.map((elem => elem.reduce(function(accum_set,current_set) {
    return(new Set([...accum_set].filter(elem => current_set.has(elem))));
})));

//console.log(intersections);
console.log(intersections.reduce(function(accum_size,current_size) {
    return(accum_size + current_size.size);
},0));