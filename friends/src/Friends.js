import React from "react";
import axios from "axios";
import Friend from "./Friend";

class Friends extends React.Component {
    state = {
        friends: [],
        age: '',
        email: '',
        name: ''
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

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    submitHandler = e => {
        // e.preventDefault();
        
        let data = {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,               
            };

        let url = "http://localhost:5000/friends";

        axios.post(url, data)
            .then(response => console.log(response))
            .catch(err => console.log(err))

        this.setState({
            name: "",
            age: "",
            email: ""
        })
            
        }

    updateHandler = id => {

        let data = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,                
        };

        let url = `http://localhost:5000/friends/${id}`;
            
        axios.put(url, data)
            .then(response => {
                this.setState({
                friends: response.data
    
                })
            })
        }

 
    

    render(){
        return (
            <div>
                {this.state.friends.map(friend => { 
                    return (
                    <Friend 
                        friend = {friend}
                        updateHandler ={this.updateHandler} />
                )
                    })}

            <form
                onSubmit = {this.submitHandler}>
                <input 
                    placeholder="Name" 
                    name = "name"
                    value = {this.state.name}
                    onChange = {this.changeHandler}
                    />
                <input 
                    placeholder="Age" 
                    name = "age"
                    value = {this.state.age}
                    onChange = {this.changeHandler}
                    />
                <input 
                    placeholder="Email" 
                    name = "email"
                    value = {this.state.email}
                    onChange = {this.changeHandler}
                    />    
                <button>POST</button>    
                
            </form> 

            </div> 
        );
    }
};



export default Friends;