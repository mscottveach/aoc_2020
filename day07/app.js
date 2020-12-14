fetch("input.txt")
.then(function(response) {
  if (response.status !== 200) {
    console.log(
      "Looks like there was a problem. Status Code: " + response.status
    );
    return;
  }

  var node = document.getElementById("output");
  // Examine the text in the response
  var the_data = "";
  response.text().then(function(data) {
    the_data = data;
    let data_ros = the_data.split('\r\n');
    console.log(data_ros);
    
    function is_it_first(in_string, in_word) {
      words = in_string.split(' ');
      first_word = words[0] + ' ' + words[1];
      if (first_word === in_word) { return(true);}
        else { return(false);}
    }

    let part_one = 'shiny gold';
    let final_colors = new Set();
    function find_parents(in_string) {
        let list_of_colors = [];
        data_ros.forEach((a_string) => {
            if (a_string.match(in_string)) {
              if (!is_it_first(a_string, in_string))
                list_of_colors.push(first_word);
            }
        });

        while (list_of_colors.length > 0) {
          a_color = list_of_colors.pop();
          final_colors.add(a_color);
          find_parents(a_color);
        }
    }

    find_parents(part_one);
    console.log(final_colors.size);


    function dfstst(in_val) {
      return 99;
    }

    console.log(dfstst(5));
    sec_tot = 0;
    //PART TWO
    let dfs_stack = [];
    function dfs(a_bag) {
      split_bag = a_bag.split(' ');
      let multiplier = parseInt(split_bag[0]);
      let in_bag = split_bag[1] + ' ' + split_bag[2];
      for (j=0;j<data_ros.length;j++) {
        a_string = data_ros[j];
        if (is_it_first(a_string, in_bag)) {
          if (a_string.match(/no other/g)) {
            return multiplier;
          }
          else {
            words = a_string.split(' ');
            for (i = 4; i < words.length; i=i+4) {
              new_multiplier = multiplier * parseInt(words[i]);
              let bag = new_multiplier + ' ' + words[i+1] + ' ' + words[i+2];
              dfs_stack.push(bag);
            }
          }
        }
      };

      let count = 0;
      while (dfs_stack.length > 0) {
        let retval = 0;
        next_bag = dfs_stack.pop();
        console.log(next_bag);
        sec_tot += parseInt((next_bag.split(' '))[0]);
        dfs(next_bag);


      }
      return(sec_tot);
    }
    console.log(dfs('1 shiny gold'));
    console.log(sec_tot);
  });

}).catch(function(err) {
  console.log("Fetch Error :-S", err);
});
