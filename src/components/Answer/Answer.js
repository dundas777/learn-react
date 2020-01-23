import React from 'react';
import classes from './Answer.css';

const answer = (props) => {
    return (
        <div className={classes.Answer}>
            <p>{props.answerText}</p>
        </div>
    )
};

export default answer;