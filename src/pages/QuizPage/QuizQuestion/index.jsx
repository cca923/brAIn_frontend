import { QUIZ_TYPE } from "../../../constants";

import { QuizContainer, QuizTitle, QuizText } from "./styles";
import RadioQuiz from "./RadioQuiz";
import BlankQuiz from "./BlankQuiz";

const QuizQuestion = ({
  className,
  index,
  quizId,
  type,
  question,
  options = [],
  onRadioChange,
  onBlankChange,
  userAnswer,
  correctAnswer,
  isCorrect,
  feedback,
  keyConcepts,
  isSubmitted,
}) => (
  <QuizContainer className={className}>
    <QuizTitle>Q{index + 1}.</QuizTitle>
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
              feedback={feedback}
              keyConcepts={keyConcepts}
              isSubmitted={isSubmitted}
            />
          );
        case QUIZ_TYPE.CLOZE:
        case QUIZ_TYPE.SHORT_ANSWER:
          return (
            <BlankQuiz
              quizId={quizId}
              onChange={onBlankChange}
              userAnswer={userAnswer}
              correctAnswer={correctAnswer}
              isCorrect={isCorrect}
              feedback={feedback}
              keyConcepts={keyConcepts}
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
