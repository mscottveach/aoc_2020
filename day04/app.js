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
input_ros.map((a_line) => {
    const pp = Object.create(a_passport);
    array_line = a_line.split(',');
    array_line.map((an_elem) => {
        kvp =  an_elem.split(':');
        
        pp[kvp[0]] = kvp[1];

    });

    passports.push(pp);
});


//holy moley, functional programming is the opposite of readable
//but now passports is an array of passport objects.

//console.log(passports);

//using reduce to filter out the bad passports and map their count into a single num
reducer = (accumulator, currentVal) => {
    let numOfKeys = Object.keys(currentVal).length;
    let valid = 0;
    if (numOfKeys >= 8) {
        valid = 1;
    }
    else if (numOfKeys <= 6){
        valid = 0;
    }
    else if ('cid' in currentVal) {
        valid = 0;
    }
    else {
        valid = 1;
    }

    return(accumulator + valid);
};


let valid_passports = passports.reduce(reducer, 0);
console.log(valid_passports);

//console.log(/^#[a-zA-Z0-9]{6}/.test('#12346'));
let counter = 0;



/* PART TWO */
eye_color = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

a_filter = (currentVal  => {
    let numOfKeys = Object.keys(currentVal).length;
    console.log(numOfKeys);
    if ((numOfKeys <= 6) || ((numOfKeys == 7) && ('cid' in currentVal))) {
       return(false);
    }
    else return(true);
});

let vpp = passports.filter(a_filter);

//now vpp has the passports from part one
//do the same thing again

b_filter = (currentVal) => {
    let retVal = true;

    if ((currentVal['byr'] < 1920) || (currentVal['byr'] > 2002)) { return false;};
    if ((currentVal['iyr'] < 2010) || (currentVal['iyr'] > 2020)) { return false;};
    if ((currentVal['eyr'] < 2020) || (currentVal['eyr'] > 2030)) { return false;};
    if (!(/^#[a-zA-Z0-9]{6}/.test(currentVal['hcl']))) {return false};
    if (!(/[0-9]{9}/.test(currentVal['pid']))) {return  false};
    if (!(eye_color.includes(currentVal['ecl']))) { 
            return false;
        };
    if (/[0-9]{2-3}in/.test(currentVal['hgt'])) {
        decon = currentVal['hgt'].split('i');
        if ((decon[0] < 59) || (decon[9] >77)) {
            return true;
        };
    }
    if (/[0-9]{2-3}cm/.test(currentVal['hgt'])) {
        decon = currentVal['hgt'].split('c');
        if ((decon[0] < 150) || (decon[9] >193)) {
            return true;
        };
    } 
    return (retVal);
};

valid_pp = vpp.filter(b_filter);
console.log(valid_pp.length);


