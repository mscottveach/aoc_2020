import React from "react";


class ButtonDisplay extends React.Component {



    render() {
        //console.log(this.props.in_label);
        return (
            <div className="number">
               {this.props.in_label}
            </div>
        );
    }
    
}

export default ButtonDisplay