import { QUIZ_TYPE } from "../../../constants";

import RadioQuiz from "./RadioQuiz";
import BlankQuiz from "./BlankQuiz";

import { QuizContainer, QuizTitle, QuizText } from "./styles";

const QuizQuestion = ({
  className,
  quizId,
  type,
  question,
  options = [],
  onRadioChange,
  onBlankChange,
  userAnswer,
  correctAnswer,
  status,
  isSubmitted,
}) => (
  <QuizContainer className={className}>
    <QuizTitle>Q{quizId}.</QuizTitle>
    <QuizText>{question}</QuizText>
    {(() => {
      switch (type) {
        case QUIZ_TYPE.RADIO:
          return (
            <RadioQuiz
              quizId={quizId}
              options={options}
              onChange={onRadioChange}
              userAnswer={userAnswer}
              correctAnswer={correctAnswer}
              status={status}
              isSubmitted={isSubmitted}
            />
          );
        case QUIZ_TYPE.BLANK:
          return (
            <BlankQuiz
              quizId={quizId}
              onChange={onBlankChange}
              userAnswer={userAnswer}
              correctAnswer={correctAnswer}
              status={status}
              isSubmitted={isSubmitted}
            />
          );
        default:
          return null;
      }
    })()}
  </QuizContainer>
);
export default QuizQuestion;
