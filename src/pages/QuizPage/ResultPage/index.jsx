import FeedbackCard from "../../../components/FeedbackCard";
import { PrimaryButton, RowButtonsContainer } from "../../../styles/common";
import DotNavigation from "../DotNavigation";

import { ResultContainer, ResultScore, ResultTitle } from "./styles";

const ResultPage = ({
  isSubmitted,
  correctCount,
  totalCount,
  feedback,
  quizzes,
  selectedQuizIndex,
  userAnswersMap,
  onNavDotClick,
  onEnd,
  onNewQuiz,
}) => {
  return (
    <ResultContainer>
      <ResultTitle>Quiz Results</ResultTitle>
      <ResultScore>
        Score: <span>{correctCount || 0}</span>/{totalCount || 0}
      </ResultScore>
      <DotNavigation
        isSubmitted={isSubmitted}
        quizzes={quizzes}
        selectedQuizIndex={selectedQuizIndex}
        userAnswersMap={userAnswersMap}
        onClick={onNavDotClick}
      />
      <FeedbackCard feedback={feedback} />
      <RowButtonsContainer width="50%">
        <PrimaryButton onClick={onEnd}>End Quiz</PrimaryButton>
        <PrimaryButton onClick={onNewQuiz}>New AI Quiz</PrimaryButton>
      </RowButtonsContainer>
    </ResultContainer>
  );
};

export default ResultPage;
