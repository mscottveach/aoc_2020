var msg = 'Hello World';
console.log(msg);

var fs = require('fs');

/*fs.readFile('advent-01.txt','utf8',function(err, data) {
    //if (err) throw err;
    console.log(data);
});*/

fs.readFile('aoc2a.txt', 'utf8', function(err, data) {
    if (err) throw err;

    var textByLine = data.split('\n');
    console.log(textByLine);
    bad = 0;
    good = 0;
    cnt = 0;
    for (i = 0; i < textByLine.length; i++) {
        var tokens = textByLine[i].split(' ');
        var minmax = tokens[0].split('-');
        var letter = tokens[1].split(':');
        var pword = tokens[2].split('\r');
        //console.log(letter);
        pword = pword[0]
        countInPW = (pword.match(new RegExp(letter[0], "g"))||[]).length;
        console.log(countInPW);
        var min = parseInt(minmax[0]);
        var max = parseInt(minmax[1]);
        var minlet = pword[min-1];
        var maxlet = pword[max-1];
        var result1 = maxlet.localeCompare(letter[0]);
        var result2 = minlet.localeCompare(letter[0]);
        console.log(min, max, pword, minlet, maxlet, result1, result2);

        
        if ((result1 + result2)*(result1+result2) == 1) {
            cnt += 1;
        }



        
        if ((min <= countInPW) && (countInPW <= max)) {
            good = good + 1;
        } else {
            bad = bad + 1;
        }



        

       // console.log(minmax, letter, pword);
    }
   // console.log(good);
   // console.log(bad);
   console.log(cnt);
});