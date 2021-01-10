
import './App.css';
import React, {useEffect, useState} from 'react';
import { WiredButton, WiredInput } from "wired-elements"
import Demo from './Demo.js';
import AnEl from './Line.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Demo />
          <AnEl />
      </header>
    </div>
  );
}

export default App;
