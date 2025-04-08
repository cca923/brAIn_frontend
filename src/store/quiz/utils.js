export const convertToUserAnswersMap = (quizzes) => {
  const userAnswersMap = {};

  quizzes?.forEach((quiz) => {
    userAnswersMap[quiz?.id] = { answer: "" };
  });

  return userAnswersMap;
};

export const convertToUserAnswers = (userAnswersMap) => {
  return Object.entries(userAnswersMap)?.map(([id, { answer }]) => ({
    _id: id,
    userAnswer: answer,
  }));
};
