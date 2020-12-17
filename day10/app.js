var fs = require('fs');
const { isNullOrUndefined } = require('util');
var data = fs.readFileSync('input.txt',"utf8");

the_data = data.split('\n');

sav_data = data.split('\n');

function compareNumbers(a, b) {
    return a - b;
  }





count = 0; onecnt = 0; trecnt = 0;

int_data = [];
for (i=0;i<the_data.length;i++) {
    int_data.push(parseInt(the_data[i]));
};

int_data.sort(compareNumbers);
//onsole.log(int_data);

for (i=1;i<int_data.length;i++) {
    diff = Math.abs(int_data[i] - int_data[i-1]);
    if (diff == 1) {
        onecnt += 1;
    }   
    else if (diff == 3) {
        trecnt += 1;
    }
}
onecnt += 1; //for the wall
trecnt += 1; //for the device
//console.log(onecnt, trecnt);
//console.log(onecnt*trecnt);

po1g = [];
po1g.push(1);
po1g.push(2);
po1g.push(4);
for (i=3;i<12;i++) {
    po1g.push(po1g[i-1] + po1g[i-2] + po1g[i-3]);
}

//console.log(int_data);

last = int_data[0];
let group_cnt = 2;
let ttp = 1;
for (i=1;i<int_data.length;i++) {
    diff = int_data[i] - int_data[i-1];
    if (diff == 1) {
        group_cnt += 1;
    }
    else if (diff == 3) {
        group_cnt = group_cnt - 1;
        group_cnt = Math.max(group_cnt,1);
        pig = po1g[group_cnt-1];
        ttp = pig * ttp;
        group_cnt = 1;
    }
}
console.log(ttp);


