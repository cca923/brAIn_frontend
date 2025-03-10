import React from "react";
import classnames from "classnames";

import { RadioGroup, RadioOption } from "./styles";

const RadioQuiz = ({
  quizId,
  options,
  onChange,
  userAnswer,
  correctAnswer,
  isSubmitted,
}) => {
  const handleChange = ({ value }) => {
    onChange?.({ quizId, value });
  };

  return (
    <RadioGroup>
      {options?.map((option) => (
        <RadioOption
          key={option?.id}
          className={classnames({
            correct: isSubmitted && option?.id === correctAnswer,
            wrong:
              isSubmitted &&
              option?.id === userAnswer &&
              option?.id !== correctAnswer,
          })}
        >
          <input
            type="radio"
            name="answer"
            value={option?.id}
            checked={userAnswer === option?.id}
            onChange={() => handleChange({ value: option?.id })}
            disabled={isSubmitted}
          />
          {option?.text}
        </RadioOption>
      ))}
    </RadioGroup>
  );
};

export default RadioQuiz;
