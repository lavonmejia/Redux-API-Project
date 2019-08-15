import React from "react";

const Question = props => {
  return (
    <div class="card">
      <div class="card-body">
        <div class="card-header">Category: {props.question.category}</div>
        <div
          class="card-text"
          dangerouslySetInnerHTML={{ __html: props.question.question }}
        />
        <div class="card-text">Answer: {props.question.correct_answer}</div>
      </div>
    </div>
  );
};

export default Question;
