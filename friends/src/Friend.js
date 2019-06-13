import React from "react";
import axios from "axios";

class Friend extends React.Component {
    state = {

    }

    deleteHandler = e => {

        axios.delete(`http://localhost:5000/friends/${this.props.friend.id}`)
        .then()
    }


    render(){
        return (
            <div>
                <form>
                    <h1>{this.props.friend.name}</h1>
                    <p>age: {this.props.friend.age}</p>
                    <p>email: {this.props.friend.email}</p>
                    <button
                        key = {this.props.friend.id}
                        onClick = {() => this.props.updateHandler(this.props.friend.id)}>
                        Update
                    </button>
                    <button
                        key = {this.props.friend.id}
                        onClick = {this.deleteHandler}>
                        X
                    </button>
                    
                </form>
            </div>
        )



    }
}

export default Friend;