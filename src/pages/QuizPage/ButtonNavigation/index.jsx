import React from "react";
import { NavigationContainer, NavButton } from "./styles";

const ButtonNavigation = ({
  isSubmitted,
  isPrevBtnDisabled,
  isLastQuiz,
  onPrevClick,
  onNextClick,
  onSubmit,
}) => (
  <NavigationContainer>
    <NavButton onClick={onPrevClick} disabled={isPrevBtnDisabled}>
      Previous Quiz
    </NavButton>
    {isLastQuiz ? (
      <NavButton onClick={onSubmit}>
        {isSubmitted ? "View Result" : "Submit Quiz"}
      </NavButton>
    ) : (
      <NavButton onClick={onNextClick}>Next Quiz</NavButton>
    )}
  </NavigationContainer>
);

export default ButtonNavigation;
