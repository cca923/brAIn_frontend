import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";

import {
  setAnswer,
  goToNextQuiz,
  goToPrevQuiz,
  goToQuiz,
  resetQuiz,
} from "../../store/quiz/slice";
import { handleLoadQuizzes, handleSubmitQuiz } from "../../store/quiz/service";
import { quizSelector } from "../../store/selectors";
import { handleLoadFolders } from "../../store/folders/service";
import Header from "../../containers/Header";

import { PageContainer, Card, Title, ActionGroup } from "./styles";
import QuizQuestion from "./QuizQuestion";
import RadioQuiz from "./QuizQuestion/RadioQuiz";
import ButtonNavigation from "./ButtonNavigation";
import DotNavigation from "./DotNavigation";
import ResultPage from "./ResultPage";

const QuizPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    quizzes,
    selectedQuizIndex,
    userAnswersMap,
    isSubmitted,
    correctCount,
    feedback,
  } = useSelector(quizSelector);

  const [tempAnswer, setTempAnswer] = useState("");
  const [isViewQuiz, setIsViewQuiz] = useState(true);

  const currentQuiz = quizzes[selectedQuizIndex];

  // Handle each quiz input value
  const handleBlankChange = ({ value }) => {
    setTempAnswer(value);
  };

  const handleRadioChange = ({ quizId, value }) => {
    dispatch(setAnswer({ quizId, answer: value }));
  };

  // Handle save user current answer before submit
  const handleSaveAnswer = () => {
    if (currentQuiz && tempAnswer) {
      dispatch(setAnswer({ quizId: currentQuiz.id, answer: tempAnswer }));
      setTempAnswer("");
    }
  };

  const handleNext = () => {
    handleSaveAnswer();
    dispatch(goToNextQuiz());
  };

  const handlePrev = () => {
    handleSaveAnswer();
    dispatch(goToPrevQuiz());
  };

  const handleNavDotClick = ({ index }) => {
    handleSaveAnswer();
    dispatch(goToQuiz({ index }));
    setIsViewQuiz(true);
  };

  const handleSubmit = () => {
    if (!isSubmitted) {
      handleSaveAnswer();
      dispatch(handleSubmitQuiz());
    }
    setIsViewQuiz(false);
  };

  const handleEndQuiz = () => {
    dispatch(resetQuiz());
    navigate("/");
    dispatch(handleLoadFolders());
  };

  const handleNewQuiz = () => {
    dispatch(resetQuiz());
    dispatch(handleLoadQuizzes());
    setIsViewQuiz(true);
  };

  return (
    <PageContainer>
      <Card>
        <Header />
        {isSubmitted && !isViewQuiz && (
          <ResultPage
            isSubmitted={isSubmitted}
            correctCount={correctCount}
            totalCount={quizzes?.length}
            feedback={feedback}
            quizzes={quizzes}
            selectedQuizIndex={selectedQuizIndex}
            onNavDotClick={handleNavDotClick}
            onEnd={handleEndQuiz}
            onNewQuiz={handleNewQuiz}
          />
        )}

        {isViewQuiz && (
          <>
            {quizzes?.map((quiz, index) => (
              <QuizQuestion
                key={quiz?.id}
                className={classnames({
                  selected: index === +selectedQuizIndex,
                })}
                index={index}
                quizId={quiz?.id}
                type={quiz?.type}
                question={quiz?.question}
                options={quiz?.options}
                onRadioChange={handleRadioChange}
                onBlankChange={handleBlankChange}
                userAnswer={tempAnswer || userAnswersMap?.[quiz?.id]?.answer}
                correctAnswer={quiz?.answer}
                isCorrect={quiz?.correct}
                feedback={quiz?.feedback}
                keyConcepts={quiz?.keyConcepts}
                isSubmitted={isSubmitted}
              />
            ))}
            <ActionGroup>
              <ButtonNavigation
                isSubmitted={isSubmitted}
                isPrevBtnDisabled={selectedQuizIndex === 0}
                isLastQuiz={selectedQuizIndex === quizzes?.length - 1}
                onPrevClick={handlePrev}
                onNextClick={handleNext}
                onSubmit={handleSubmit}
              />
              <DotNavigation
                isSubmitted={isSubmitted}
                quizzes={quizzes}
                selectedQuizIndex={selectedQuizIndex}
                onClick={handleNavDotClick}
              />
            </ActionGroup>
          </>
        )}
      </Card>
    </PageContainer>
  );
};

export default QuizPage;
