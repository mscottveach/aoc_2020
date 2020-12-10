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




/* PART TWO */
eye_color = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

a_filter = (currentVal  => {
    let numOfKeys = Object.keys(currentVal).length;
    if ((numOfKeys <= 6) || ((numOfKeys == 7) && ('cid' in currentVal))) {
       return(false);
    }
    else return(true);
});

let vpp = passports.filter(a_filter);
//console.log(vpp);

//now vpp has the passports from part one
//do the same thing again
let count = 0;
b_filter = (currentVal) => {
    let retVal = true;
    count = count + 1;
    moss = 50000000;

   /// console.log(currentVal);



    if ((currentVal['byr'] >= 1920) && (currentVal['byr'] <= 2002)) { 
        //console.log(currentVal);
        //return false;
        moss = moss + 1;
        };
    if ((currentVal['iyr'] >= 2010) && (currentVal['iyr'] <= 2020)) { 
        //console.log(currentVal);
        //return false;
        moss = moss + 10;
    };
    if ((currentVal['eyr'] >= 2020) && (currentVal['eyr'] <= 2030)) { 
        //console.log(currentVal);
        //return false;
        moss = moss + 100;
    };


    if ((/^#[a-zA-Z0-9]{6}\b/.test(currentVal['hcl']))) {
        //console.log(currentVal);
        //return false
        moss = moss + 1000;
    };
    if ((/^[0-9]{9}\b/.test(currentVal['pid']))) {
        //console.log(currentVal);
        moss = moss + 10000;
    };
    if ((eye_color.includes(currentVal['ecl']))) { 
        //console.log(currentVal);
        moss = moss + 100000;
    };

    if (/^\d{2,3}in/.test(currentVal['hgt'])) {
        decon = currentVal['hgt'].split('i');
        if ((decon[1] == 'n') && ((decon[0] >= 59) && (decon[0] <= 76))) {
            //console.log(currentVal);
            //console.log(decon);
            moss = moss + 1000000;
            //return false;
        };
    } else if (/^\d{2,3}cm/.test(currentVal['hgt'])) {
        decon = currentVal['hgt'].split('c');
        if ((decon[1] == 'm') && ((decon[0] >= 150) && (decon[0] <= 193))) {
            //console.log(currentVal);
            //console.log(decon);
            moss = moss + 1000000;
            //return false;
        };
    }
   // console.log(moss);
    if (moss != 51111111) {
        //console.log(moss);
        console.log(moss);
        console.log(currentVal);
        return false;
    } else if (moss == 51111111) {
        return true;
    }

};

console.log(vpp.length);
valid_pp = vpp.filter(b_filter);
console.log(valid_pp.length);

console.log((/^\d{9}\b/.test('1023322222')));