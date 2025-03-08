import FeedbackCard from "../../../components/FeedbackCard";
import DotNavigation from "../DotNavigation";

import {
  NavButton,
  NavigationContainer,
  ResultContainer,
  ResultScore,
  ResultTitle,
} from "./styles";

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
        Correct: <span>{correctCount || 0}</span>/{totalCount || 0}
      </ResultScore>
      <DotNavigation
        isSubmitted={isSubmitted}
        quizzes={quizzes}
        selectedQuizIndex={selectedQuizIndex}
        userAnswersMap={userAnswersMap}
        onClick={onNavDotClick}
      />
      <FeedbackCard feedback={feedback} />
      <NavigationContainer>
        <NavButton onClick={onEnd}>End Quiz</NavButton>
        <NavButton onClick={onNewQuiz}>New AI Quiz</NavButton>
      </NavigationContainer>
    </ResultContainer>
  );
};

export default ResultPage;
