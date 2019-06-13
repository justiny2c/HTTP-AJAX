import React from "react";
import axios from "axios";

class Friend extends React.Component {
    state = {

    }


    render(){
        return (
            <div>
                {/* <form> */}
                    <h1>{this.props.friend.name}</h1>
                    <p>age: {this.props.friend.age}</p>
                    <p>email: {this.props.friend.email}</p>
                    <button
                        onClick = {(e) => this.props.updateHandler(e, this.props.friend.id)}>
                        Update
                    </button>
                    <button
                        onClick = {(e) => this.props.deleteHandler(e, this.props.friend.id)}>
                        X
                    </button>
                    
                {/* </form> */}
            </div>
        )



    }
}

export default Friend;