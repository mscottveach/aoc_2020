import React from "react";
import ButtonDisplay from "./ButtonDisplay.js"


class Buttons extends React.Component {



    render() {
        const first_10 = this.props.in_data.slice(0,920);
        // const ray_f10 = first_10.map(a_str => (a_str.trim()).split(''));
        // const flt_f10 = [].concat(...ray_f10);

        return (
            <div className="ten-by-ten">
                {first_10.map(a_num => <ButtonDisplay in_label={a_num}/>)}
            </div>
        );
    }
    
}


export default Buttons