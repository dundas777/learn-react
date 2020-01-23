import React from 'react'

const userInput = (props) => {
    return (
        <div>
           <input onChange={props.nameChanger} value={props.userName} />
        </div>
    )
}

export default userInput;