var fs = require('fs');
const { isNullOrUndefined } = require('util');
var data = fs.readFileSync('input.txt',"utf8");

the_data = data.split('\n');
sav_data = data.split('\n');

pos = 0;
acc = 0;
while ((the_data[pos] != 'X') && (pos < 620)) {
//while (pos < 20) {
    inst = the_data[pos];
    inst_split = inst.split(' ');
    sign = inst_split[1].slice(0,1);
    val = parseInt(inst_split[1].slice(1,));
    console.log(pos);
    if (sign === '-') {
        val = val*-1;
    }
    if (inst_split[0] === 'jmp') {
        the_data[pos] = 'X';
        pos += val;
    }
    else if (inst_split[0] === 'acc') {
        acc = acc + val;
        the_data[pos] = 'X';
        pos += 1;
    }
    else {
        the_data[pos] = 'X';
        pos += 1;
    }
   // console.log('*' + pos);
}
console.log(acc);

//there are the following cases to reach the end-zone:
//an unvisited jmp - which i can't change,
//there is either an unbroken chain to a visited jmp or there's not
//if there is, change that jmp to a nop
//if there isn't recurse on the new range

//a visited nop - which i change to a jump, this case is trivial, i cahnge to jmp and am done
//
//the following are ruled out:
//visited jmp - else i would have gotten to end
console.log('part 2');

function Instruction(word, val) {
    this.word = word;
    this.val = val;
}

function get_instruction(in_inst) {
    inst_split = in_inst.split(' ');
    sign = inst_split[1].slice(0,1);
    val = parseInt(inst_split[1].slice(1,));
    if (sign === '-') {val = val*-1;}
    word = inst_split[0];
    ret_obj = new Instruction(word, val);
    return ret_obj;
}

function did_i_visit(inst) {
    if (inst === 'X') return true;
    else return false;
}

function deal_or_nodeal(start_index) {
    dpos = start_index;
    while ((the_data[dpos] != 'X') && (dpos < 620)) {
        console.log(dpos);
        ins = get_instruction(sav_data[dpos]);
        word = ins.word;
        val = ins.val;
        if (word === 'jmp') {
            dpos += val;
        }
        else if (word === 'acc') {
            dpos += 1;
        }
        else {
            dpos += 1;
        }     
    }
    
    if (dpos == 620) {
        console.log('returning true');
        return true;
    }
    else {
        console.log('returning false');
        return false;
    }
}



function ftybr(start_index) {

    let posi = start_index;
    console.log(posi);
    while (posi < 620) {
 //       var ins = new Instruction('',0);
        ins = get_instruction(sav_data[posi]);
        //console.log(ins);
        word = ins.word;
        aval = ins.val;
        if (word === 'jmp') {
            //console.log('calling dond from '+posi);
            if (deal_or_nodeal(posi + 1)) {
             //   console.log('DEAL @ '+posi);
                break;
            }
            else {
                console.log(posi, val);
                posi += aval;
                console.log('fair jump to '+posi);
            }
        }
        else if (word === 'acc') {
            acc = acc + aval;
            posi += 1;
        }
        else {
            posi += 1;
        }
    }
}
acc = 0;
ftybr(0);
console.log(acc);
