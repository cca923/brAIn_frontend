import React from "react";
import classnames from "classnames";

import Suggestion from "../Suggestion";

import { RadioGroup, RadioOption } from "./styles";

const RadioQuiz = ({
  quizId,
  options,
  onChange,
  userAnswer,
  correctAnswer,
  feedback,
  keyConcepts,
  isSubmitted,
}) => {
  const handleChange = ({ value }) => {
    onChange?.({ quizId, value });
  };

  return (
    <RadioGroup>
      {options?.map((option) => (
        <RadioOption
          key={option}
          className={classnames({
            correct: isSubmitted && option === correctAnswer,
            wrong:
              isSubmitted && option === userAnswer && option !== correctAnswer,
          })}
        >
          <input
            type="radio"
            name={`answer-${quizId}`}
            value={option}
            checked={String(userAnswer) === String(option)}
            onChange={() => handleChange({ value: option })}
            disabled={isSubmitted}
          />
          {option}
        </RadioOption>
      ))}

      {isSubmitted && (
        <Suggestion feedback={feedback} keyConcepts={keyConcepts} />
      )}
    </RadioGroup>
  );
};

export default RadioQuiz;
