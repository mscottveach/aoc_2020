import Tween from 'rc-tween-one';
import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import ship from './ship.png';
import raw from './input.txt';

function Demo() {
    const [posx, setPosx] = useState(0);
    const [posy, setPosy] = useState(window.innerHeight-75);
    const [rot, setRot] = useState(45);
    const [cmds, setCmds] = useState([]);


    useEffect (() => {

      fetch(raw)
        .then(r => r.text())
        .then(text => {
          const holdCmds = text.split('\n');
          setCmds(holdCmds);
        }
        );
      window.onresize = goHome;}, []);

     useEffect (() => {
      console.log(cmds);
      cmds.map((elem) => {
        if (elem[0] === 'R') {
          console.log(elem);
          setRot(rot => rot + 1);
        }
      })
     },[cmds]);
    

    const goHome = () => {setPosx(0);setPosy(window.innerHeight-75);setRot(45)};
    const handleClick = () => {setRot(rot => rot + 1)};//setPosx(posx => posx +300)};

    return (
    <div style={{
      position: "absolute",
      left: posx,
      top: posy,
      transform: "rotate("+rot+"deg)",
      transition: "left 2s, top 2s, transform 2s"
    }}>
        <img src={ship} className="Ship" alt="ship" onClick={handleClick}/>
    </div>
  );
}
export default Demo;
