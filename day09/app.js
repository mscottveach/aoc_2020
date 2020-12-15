var fs = require('fs');
const { isNullOrUndefined } = require('util');
var data = fs.readFileSync('input.txt',"utf8");

the_data = data.split('\n');
sav_data = data.split('\n');

pos = 0;
the_q = [];
the_v = [];

preamble = 25;

for (i=0;i<preamble;i++){
    the_q.push(the_data[pos]);
    pos += 1;
}

for (i=0;i<preamble;i++){
    for (j=i+1;j<preamble;j++) {
        the_v.push(parseInt(the_q[i])+parseInt(the_q[j])); 
    }
}

function pop_v(pos) {
    the_v = [];
    for (i=0;i<preamble;i++){
        for (j=i+1;j<preamble;j++) {
            the_v.push(parseInt(the_q[i])+parseInt(the_q[j])); 
        }
    }
}

the_v2 = [];
function verify_check(pos) {
    the_v2 = [];
    for (i=pos-preamble;i<pos;i++) {
        for (j=i+1;j<pos;j++) {
            the_v2.push(parseInt(the_data[i])+parseInt(the_data[j]));
        }
    }
    the_v2.forEach((elem) => {
       if(!the_v.includes(elem)) {
           console.log(elem);
       }; 
    });
}

while (true) {

    check_val = parseInt(the_data[pos]);

    if (the_v.includes(check_val)) {
        the_q.shift();
        the_q.push(parseInt(the_data[pos]));
        pop_v(pos);
    }
    else {
        console.log('returning '+check_val);
        verify_check(pos);
       // console.log(the_q);
       // console.log(the_v);
        return check_val;
        break;
    }
    pos += 1;
}


//DAY 2
let invalid = 373803594;

sum = 0;
left_pos = 0;
while (sum != invalid) {
    console.log('in loop');
    while (sum < invalid ) {
        sum += parseInt(the_data[pos]);
        pos += 1;
    }
    while (sum > invalid) {
        sum = sum - parseInt(the_data[left_pos]);
        left_pos = left_pos + 1;
    }
}
the_subset = the_data.slice(left_pos,pos+1);
the_min = Math.min(...the_subset);
the_max = Math.max(...the_subset);
console.log(the_min+the_max);

//console.log(the_v);
