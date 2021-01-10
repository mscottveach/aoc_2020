
import Utils from './Utils.js';




function StarDisplay(props) {
      return(
        Utils.range(1, props.starNum).map(starId =>
        <div key={props.starId} className="star" />)
      );
};

export default StarDisplay