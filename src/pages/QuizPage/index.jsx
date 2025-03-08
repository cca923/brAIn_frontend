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
import { folderSelector, quizSelector } from "../../store/selectors";
import Header from "../../containers/Header";
import { QUIZ_TYPE } from "../../constants";

import { PageContainer, Card, Title, ActionGroup } from "./styles";
import QuizQuestion from "./QuizQuestion";
import RadioQuiz from "./QuizQuestion/RadioQuiz";
import ButtonNavigation from "./ButtonNavigation";
import DotNavigation from "./DotNavigation";
import ResultPage from "./ResultPage";

const QuizPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedFolderId } = useSelector(folderSelector);

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
  };

  const handleNewQuiz = () => {
    dispatch(resetQuiz());
    dispatch(handleLoadQuizzes({ folderId: selectedFolderId }));
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
            userAnswersMap={userAnswersMap}
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
                quizId={quiz?.id}
                type={quiz?.type}
                question={quiz?.question}
                options={quiz?.options}
                onRadioChange={handleRadioChange}
                onBlankChange={handleBlankChange}
                userAnswer={userAnswersMap?.[quiz?.id]?.answer}
                correctAnswer={userAnswersMap?.[quiz?.id]?.correctAnswer}
                status={userAnswersMap?.[quiz?.id]?.status}
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
                userAnswersMap={userAnswersMap}
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
