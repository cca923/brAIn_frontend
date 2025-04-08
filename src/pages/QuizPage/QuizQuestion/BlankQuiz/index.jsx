import React from "react";

import { BlankContainer } from "./styles";

const BlankQuiz = ({
  quizId,
  onChange,
  userAnswer,
  correctAnswer,
  isCorrect,
  isSubmitted,
}) => {
  const handleChange = (e) => {
    onChange?.({ quizId, value: e.target.value });
  };

  const displayAnswer = isSubmitted && !isCorrect;

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
      {displayAnswer && (
        <div className="correct-ans">
          <div className="info">Correct Answer:</div>
          <div className="ans">{correctAnswer}</div>
        </div>
      )}
    </BlankContainer>
  );
};

export default BlankQuiz;
