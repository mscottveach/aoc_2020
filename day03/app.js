
var fs = require('fs');

rise = 2;
run = 1;

fs.readFile('map.txt', 'utf8', function(err, data) {
    if (err) throw err;

    let map_lines = data.split('\n');
    let map_width = map_lines[0].length;
    console.log(map_width);
    let pos_x = 0;
    let pos_y = 0;

    let x = pos_x % (map_width-1);
    let y = pos_x / map_width;
    x += run;
    y += rise;

    curr_x = 0;
    curr_y = 0;
    count_trees = 0;
    for (i=0; i < map_lines.length; i = i + rise) {
        map_width = map_lines[i].length;


        if (map_lines[i][curr_x] == '#') {
            count_trees += 1;
        }
//        map_lines[i][curr_x] = '@';
//        print_line = map_lines[i].substring(0,curr_x) + '@' + map_lines[i].substring(curr_x+1);

        pos_x = pos_x + run;
        curr_x = pos_x % (map_width-1);
    
    }

    console.log(count_trees);


    console.log(24*67*71*242*82);
    
});