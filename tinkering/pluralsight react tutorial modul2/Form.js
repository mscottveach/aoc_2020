import React from 'react';
import axios from 'axios';



class Form extends React.Component {
    //need to instantiate the form so we can use refs
    //userNameInput = React.createRef();

    state = {
        userName: '',
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        //console.log(this.state.userName);
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(response.data);
        this.setState({userName: ''});
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
               <input type="text" 
                value={this.state.userName}
                onChange={event => this.setState({userName: event.target.value})}
                placeholder="Github username"
                required 
                />
                <button>Add card</button>
            </form>
        );
    }   

    
}

export default Form