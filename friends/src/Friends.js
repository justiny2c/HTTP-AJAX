import React from "react";
import axios from "axios";
import Friend from "./Friend";

class Friends extends React.Component {
    state = {
        friends: []
    }
    componentDidMount(){ 
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({
                friends: response.data
            })
        })
        .catch(err => {});
    };

    render(){
        console.log(this.state.friends)
        return (
            <div>
                {this.state.friends.map(friend => { 
                    return (
                    <Friend friend = {friend} />
                )
                    })}
            </div> 
        );
    }
};



export default Friends;