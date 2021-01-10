import React from 'react';
import './App.css';



class Card extends React.Component {

    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={{ margin: '1rem'}}>
                <img className="a_pic" src={profile.avatar_url} />
                <div className="info" style={{display:'inline-block', marginLeft: 10}}>
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
    
}


export default Card