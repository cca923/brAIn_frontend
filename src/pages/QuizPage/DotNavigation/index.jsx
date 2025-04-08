import React from "react";
import classnames from "classnames";

import { NavigationContainer, NavDot } from "./styles";

const DotNavigation = ({
  isSubmitted,
  quizzes,
  selectedQuizIndex,
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
            correct: quiz?.correct === true,
            wrong: quiz?.correct === false,
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
