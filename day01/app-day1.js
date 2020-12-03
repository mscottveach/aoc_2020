var msg = 'Hello World';
console.log(msg);

var fs = require('fs');

/*fs.readFile('advent-01.txt','utf8',function(err, data) {
    //if (err) throw err;
    console.log(data);
});*/

fs.readFile('aoc01a.txt', 'utf8', function(err, data) {
    if (err) throw err;
   // console.log(data);
    var textByLine = data.split('\n');
   // console.log(parseInt(textByLine[0]));
    for (i=0; i < textByLine.length-2; i++) {
        for (j=i+1; j < textByLine.length-1; j++) {
            for (k=j+1; k < textByLine.length; k++) {
                a = parseInt(textByLine[i]);
                b = parseInt(textByLine[j]);
                e = parseInt(textByLine[k]);
                c = a + b + e;
                d = a * b * e;
                //console.log(a,b,c,d);
                if (c == 2020) {
                    console.log(a,b,e,c,d);
                    //console.log(a*b);
            }
        }
        }
    }
});