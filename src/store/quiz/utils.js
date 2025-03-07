import { QUIZ_STATUS } from "../../constants";

export const handleUserResult = ({
  quizzes,
  userAnswersMap,
  correctAnswers,
}) => {
  let correctCount = 0;

  const updatedUserAnswersMap = quizzes.reduce((acc, quiz) => {
    const userAnswer = userAnswersMap?.[quiz?.id];
    const correctAnswer = correctAnswers?.[quiz?.id];

    // Compare answers
    if (userAnswer?.answer === correctAnswer) {
      correctCount++;

      // Update the userAnswersMap with correct status
      acc[quiz?.id] = {
        answer: userAnswer?.answer,
        status: QUIZ_STATUS.CORRECT,
        correctAnswer,
      };
    } else {
      // Update the userAnswersMap with wrong status
      acc[quiz.id] = {
        answer: userAnswer?.answer,
        status: QUIZ_STATUS.WRONG,
        correctAnswer,
      };
    }

    return acc; // Return accumulated answers
  }, {});

  return { correctCount, userAnswersMap: updatedUserAnswersMap };
};
