import React, {useState} from 'react';
import PlayNumber from './PlayNumber.js';
import Utils from './Utils.js';
import StarDisplay from './StarDisplay.js';



function StarMatch() {
    const [stars, setStars] = useState(Utils.random(1,9));
    const [availNums, setAvailNums] = useState([1,2,3,4,5,6,7,8,9]);
    const [candNums, setCandNums] = useState([]);

    const candidatesAreWrong = Utils.sum(candNums) > stars;

    const numberStatus = (number) => {
      if (!availNums.includes(number)) {
        return 'used';
      }
      if (candNums.includes(number)) {
        return candidatesAreWrong ? 'wrong' : 'candidate';
      }
      return 'available';
    };

    const onNumberClick = (number,currentStatus) => {
        
        console.log('asdksjkdaiodoasjk');

        const newCandNums = currentStatus === 'available' ? candNums.concat(number) : candNums.filter(elem => elem != number);
      
        if (currentStatus == 'used') {
          return;
        }
        if (Utils.sum(newCandNums) != stars) {
          setCandNums(newCandNums);
        }
        else {
          const newAvailNums = availNums.filter(num => {
            return(!newCandNums.includes(num));
          });
          setStars(Utils.randomSumIn(newAvailNums,9));
          setAvailNums(newAvailNums);
          setCandNums([]);
        }
    }

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
              <StarDisplay starNum={stars}/>
          </div>
          <div className="right">
              {Utils.range(1,9).map(numId =>
                <PlayNumber 
                  key={numId} 
                  status={numberStatus(numId)}
                  number={numId}
                  onClick={onNumberClick}/>

              )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };

  export default StarMatch


  //  ReactDOM.render(<StarMatch />, mountNode);