import React from 'react';
import Question from './Question/Question';

const questions = (props) => 
    props.questions.map((question,index) => {
        return <Question question={question.question}
            type={question.type}
            answers={question.answers}
            key={question.id}/>
      });

export default questions;