import logo from './logo.svg';
import './App.css';
import IFR from './IFR.js';
import raw from './input.txt';
import React, { Component } from "react";
import Buttons from './Buttons.js';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      the_data: [],
      st_ray: []
    };
  };

  componentDidMount() {
    fetch(raw)
      .then(r => r.text())
      .then(text => {
        const data_in_lines = text.split('\n');
        const data_ray = data_in_lines.map(a_str => (a_str.trim()).split(''));
        const flat_data = [].concat(...data_ray);
        this.setState({the_data: flat_data});
      });
      this.timerID = setInterval(() => this.updateSeating(), 1000);

  }

  checkDirection(idx,inaddi,inaddj,ray,con,coni,conj) {
    let i = coni;
    let j = conj;
    let addi = inaddi;
    let addj = inaddj;
    let an_idx = (i+addi)*92 + j + addj;
    let in_bound = false;
    if (((i+addi) >= 0) && ((i+addi) <= 98) && ((j+addj) >=0) && ((j+addj) <= 91)) {
      in_bound = true;
    }
    let count = 0;
    while (in_bound) {
      if (ray[(i+addi)*92+j+addj] != '.') {
        con[coni+addi][conj+addj] += 1;
        break;
      }
      addi = addi + inaddi;
      addj = addj + inaddj;
      in_bound = false;
      if (((i+addi) >= 0) && ((i+addi) <= 98) && ((j+addj) >=0) && ((j+addj) <= 91)) {
        in_bound = true;
      }
      // count = count + 1;
      // if (count > 100) {
      //   break;
      // }      
    }
  }


  updateSeating() {

    let stable = true;
    console.log('entering update');
    const tmp_data = this.state.the_data;

    let con_ray = new Array(99).fill(0);
    for (let i=0; i<99; i++) {
      con_ray[i] = new Array(92).fill(0);
    }

    for (let i=0; i<99; i++) {
      for (let j=0; j<92; j++) {
        let idx = (i*92 + j);       
        if (tmp_data[idx] === '#') {

          this.checkDirection(idx,1,0,tmp_data,con_ray,i,j);
          this.checkDirection(idx,1,-1,tmp_data,con_ray,i,j);
          this.checkDirection(idx,1,1,tmp_data,con_ray,i,j);
          this.checkDirection(idx,0,1,tmp_data,con_ray,i,j);
          this.checkDirection(idx,0,-1,tmp_data,con_ray,i,j);
          this.checkDirection(idx,-1,0,tmp_data,con_ray,i,j);
          this.checkDirection(idx,-1,-1,tmp_data,con_ray,i,j);
          this.checkDirection(idx,-1,1,tmp_data,con_ray,i,j);  
        }   
      }
    }

    for (let i=0; i<99; i++) {
      for (let j=0; j<92; j++) {
        let idx = (i*92 + j);
        if ((tmp_data[idx] === 'L') && (con_ray[i][j] === 0)) {
          tmp_data[idx] = '#';
          stable=false;
        }
        else if ((tmp_data[idx] === '#') && (con_ray[i][j] >= 5)) {
          tmp_data[idx] = 'L';
          stable=false;
        }
      }
    }

    if (stable==true) {
      clearInterval(this.timerID);
      let count = 0;
      for (let i=0;i<tmp_data.length;i++) {
        if (tmp_data[i] === '#') {
          count = count + 1;
        }
      }
      console.log('final answer: ' + count);
    }
    console.log('exiting update');
    this.setState({the_data: tmp_data});
}

render() {
    return (
      <div className="App">
        <Buttons in_data = {this.state.the_data}/>
      </div>
    )};
}
export default App;


