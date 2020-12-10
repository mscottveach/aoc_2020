var fs = require('fs');
var data = fs.readFileSync('input.txt',"utf8");
let data_ros = data.split('\r\n');

function to_binary(in_char) {
    if ((in_char == 'F') || (in_char == 'L')) { return 0;}
    else if ((in_char =='B') || (in_char == 'R')) { return 1;}
};

apply_replace = (in_string) => {
    return(in_string.replace(/[F,L,B,R]/g,to_binary));
}

function bin_to_seat(in_binary) {
    row = parseInt(in_binary.slice(0,6),2) * 8;
    seat = parseInt(in_binary.slice(7,9),2);
    seat_id = row+seat;

    return(seat_id);
}

binary_ros = data_ros.map(apply_replace);
int_ros = binary_ros.map((in_int) => parseInt(in_int,2));
//console.log(Math.max(...int_ros));

//PART TWO

sorted_ints = int_ros.sort((a,b) => a - b);
//console.log(sorted_ints);


for (var i = 0; i < sorted_ints.length - 1; i++) {
    if (sorted_ints[i+1] != sorted_ints[i] + 1) {
        console.log(sorted_ints[i] + 1);
    } 
}