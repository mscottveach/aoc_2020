import Button from './Button.js';
import Display from './Display.js';
import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = (increment) => setCounter(counter+increment);
  return(
  <div>
    <Button onClickFunction={incrementCounter} increment={5}/>
    <Button onClickFunction={incrementCounter} increment={10}/>
    <Button onClickFunction={incrementCounter} increment={15}/>
    <Button onClickFunction={incrementCounter} increment={20}/>
    <Display message={counter}/>

  </div>
  );
}



export default App