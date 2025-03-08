import React from "react";

import { QUIZ_STATUS } from "../../../../constants";

import { BlankContainer, CorrectAnswer } from "./styles";

const BlankQuiz = ({
  quizId,
  onChange,
  userAnswer,
  correctAnswer,
  status,
  isSubmitted,
}) => {
  const handleChange = (e) => {
    onChange?.({ quizId, value: e.target.value });
  };

  const isWrong = status === QUIZ_STATUS.WRONG;

  return (
    <BlankContainer>
      <label className="info" htmlFor="answer">
        Your Answer:
      </label>
      <textarea
        id="answer"
        value={userAnswer}
        onChange={handleChange}
        placeholder="Type your answer here..."
        rows={4}
        cols={50}
        disabled={isSubmitted}
      />
      {isWrong && (
        <CorrectAnswer>
          <div className="info">Correct Answer:</div>
          <div>{correctAnswer}</div>
        </CorrectAnswer>
      )}
    </BlankContainer>
  );
};

export default BlankQuiz;
