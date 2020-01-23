import React from 'react'
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Welcome {props.userName}</p>
            <p>Here is some text</p>
        </div>
    )
}

export default userOutput;
