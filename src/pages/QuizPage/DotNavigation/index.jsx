import React from "react";
import classnames from "classnames";

import { NavigationContainer, NavDot } from "./styles";
import { QUIZ_STATUS } from "../../../constants";

const DotNavigation = ({
  isSubmitted,
  quizzes,
  selectedQuizIndex,
  userAnswersMap,
  onClick,
}) => {
  const handleClick = ({ index }) => {
    onClick?.({ index });
  };

  return (
    <NavigationContainer>
      {quizzes?.map((quiz, index) => (
        <NavDot
          key={index}
          className={classnames({
            active: !isSubmitted && selectedQuizIndex === index,
            correct: userAnswersMap?.[quiz?.id]?.status === QUIZ_STATUS.CORRECT,
            wrong: userAnswersMap?.[quiz?.id]?.status === QUIZ_STATUS.WRONG,
          })}
          onClick={() => handleClick({ index })}
        >
          {index + 1}
        </NavDot>
      ))}
    </NavigationContainer>
  );
};

export default DotNavigation;
