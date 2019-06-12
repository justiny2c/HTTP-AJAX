import React from "react";

class Friend extends React.Component {
    state = {

    }

    render(){
        return (
            <div>
                {this.props.friend.name}
            </div>
        )



    }
}

export default Friend;