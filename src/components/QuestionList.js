import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";
import Question from "./Question";

const QuestionList = props => {
  return (
    <>
      <h1>Reverse Jeopardy!</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          "Get Reverse Jeopardy Questions"
        )}
      </button>
      <div class="card-group">
        {props.questions &&
          props.questions.map((question, index) => (
            <Question key={question.index} question={question} />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    questions: state.questions
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(QuestionList);

// TASKS
// - get WebcamList connected to the Redux store
// - Bring in the `test` property from state
// - if done correctly, you should see "It's working" dipslayed in the app
// GOOD LUCK 😃
