import React from 'react';
import classes from './Question.css';
import Answer from '../../Answer/Answer.js';

const question = (props) => {
    return (
        <div className={classes.Question}>
            <p>Question: {props.question}, type: {props.type} </p>
            {
                props.answers.map(answer => {
                    return <Answer answerText={answer.answerText} key={answer.id} />
                })
            }
            <p>
            <button className={classes.NavigationButton}>&lt;- Previous</button>
            <button className={classes.SubmitButton}>Submit</button>
            <button className={classes.NavigationButton}>Next -></button>
            </p>
        </div>
    )
};

export default question;