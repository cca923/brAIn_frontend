import React from "react";

import { RowButtonsContainer } from "../../../styles/common";

import { NavButton } from "./styles";

const ButtonNavigation = ({
  isSubmitted,
  isPrevBtnDisabled,
  isLastQuiz,
  onPrevClick,
  onNextClick,
  onSubmit,
}) => (
  <RowButtonsContainer width="50%" mb="40px">
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
  </RowButtonsContainer>
);

export default ButtonNavigation;
