//Card
//List of Cards
import React from 'react';
import CardList from './CardList.js';
import Form from './Form.js';
import './App.css';

// const testData = [
//     {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//     {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//     {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];

class App extends React.Component {
    //constructor
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         profiles: testData,
    //     };
             
    // }
    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        //console.log('App', profileData);
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };


    //this keyword

    //class needs a render function - it returns the 
    render() {
        return (
            <div>

                <div className="header">{this.title}</div>;
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>  
            </div>
        );
    }
}

export default App