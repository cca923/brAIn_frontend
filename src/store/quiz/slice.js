import { createSlice } from "@reduxjs/toolkit";

import { handleLoadQuizzes, handleSubmitQuiz } from "./service";

const initialState = {
  quizzesId: "", // quizzes set has its unique id
  quizzes: [],
  selectedQuizIndex: 0,
  userAnswersMap: {
    // quizId: { answer }
  },
  correctCount: 0,
  feedback: "",
  isSubmitted: false,
  loadingMap: {
    loadQuizzes: false,
    submitQuiz: false,
  },
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { quizId, answer } = action.payload;

      state.userAnswersMap[quizId] = { answer };
    },
    goToNextQuiz: (state) => {
      if (state.selectedQuizIndex < state.quizzes.length - 1) {
        state.selectedQuizIndex += 1;
      }
    },
    goToPrevQuiz: (state) => {
      if (state.selectedQuizIndex > 0) {
        state.selectedQuizIndex -= 1;
      }
    },
    goToQuiz: (state, action) => {
      const { index } = action.payload;

      if (index >= 0 && index < state.quizzes.length) {
        state.selectedQuizIndex = index;
      }
    },
    resetQuiz: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Load Quizzes
      .addCase(handleLoadQuizzes.pending, (state) => {
        state.loadingMap.loadQuizzes = true;
        state.error = null;
      })
      .addCase(handleLoadQuizzes.fulfilled, (state, action) => {
        const { quizzesId, quizzes, userAnswersMap } = action.payload;

        state.loadingMap.loadQuizzes = false;
        state.quizzesId = quizzesId;
        state.quizzes = quizzes;
        state.userAnswersMap = userAnswersMap;
      })
      .addCase(handleLoadQuizzes.rejected, (state, action) => {
        state.loadingMap.loadQuizzes = false;
        state.error = action.error.message;
      })
      // Submit Quiz
      .addCase(handleSubmitQuiz.pending, (state) => {
        state.loadingMap.submitQuiz = true;
        state.error = null;
      })
      .addCase(handleSubmitQuiz.fulfilled, (state, action) => {
        const { quizzes, correctCount, feedback } = action.payload;

        state.loadingMap.submitQuiz = false;
        state.quizzes = quizzes;
        state.correctCount = correctCount;
        state.feedback = feedback;
        state.isSubmitted = true;
      })
      .addCase(handleSubmitQuiz.rejected, (state, action) => {
        state.loadingMap.submitQuiz = false;
        state.error = action.error.message;
      });
  },
});

export const { setAnswer, goToNextQuiz, goToPrevQuiz, goToQuiz, resetQuiz } =
  quizSlice.actions;
export default quizSlice.reducer;
