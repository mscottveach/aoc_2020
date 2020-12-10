

var cy = cytoscape({
    container: document.getElementById('cy')
  });

var cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
      { data: { id: 'a' } },
      { data: { id: 'b' } },
      {
        data: {
          id: 'ab',
          source: 'a',
          target: 'b'
        }
      }]
  });

// var fs = require('fs');
// var data = fs.readFileSync('input.txt',"utf8");
// let data_ros = data.split('\r\n');

// remove_contain = (in_string) => {
//     return('1 ' + in_string.replace(' contain ',', ').replace(/ bags?\.?/g,''));
// };

// bag_relationships = data_ros.map(remove_contain);
// console.log(bag_relationships);

// the_nodes = new Set();
// bag_relationships.forEach((in_string) => {
//     bags_in_rule = in_string.split(', ');
//     bags_in_rule.forEach((a_bag) => {
//         the_nodes.add(a_bag.slice(2,));
//     })
// })
// console.log(the_nodes);
// bag_relatioships.forEach()