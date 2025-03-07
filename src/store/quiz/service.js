import { createAsyncThunk } from "@reduxjs/toolkit";

import { correctAnswers, quizzes } from "./mockData";
import { quizType } from "../types";
import { QUIZ_STATUS } from "../../constants";
import { handleUserResult } from "./utils";

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const handleLoadQuizzes = createAsyncThunk(
  quizType.handleLoadQuizzes,
  async ({ folderId } = {}) => {
    try {
      // Simulate API call
      await delay(700);

      return {
        quizzes: quizzes, // TODO: update to api
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const handleSubmitQuiz = createAsyncThunk(
  quizType.handleSubmitQuiz,
  async (_, { getState }) => {
    try {
      const { quiz } = getState();
      const { quizzes, userAnswersMap } = quiz;
      // Simulate API call
      await delay(1500);

      const { correctCount, userAnswersMap: newUserAnswersMap } =
        handleUserResult({
          quizzes,
          userAnswersMap,
          correctAnswers,
        });

      const feedback =
        "Excellent work! You have a strong understanding of the material.";

      return {
        userAnswersMap: newUserAnswersMap,
        correctCount,
        feedback,
      };
    } catch (error) {
      console.error({ error });
      return Promise.reject(error.message);
    }
  }
);
