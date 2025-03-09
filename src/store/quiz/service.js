import { createAsyncThunk } from "@reduxjs/toolkit";

import { quizTypes } from "../types";
import { QUIZ_STATUS } from "../../constants";

import { correctAnswers, quizzes } from "./mockData";
import { handleUserResult } from "./utils";

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const handleLoadQuizzes = createAsyncThunk(
  quizTypes.handleLoadQuizzes,
  async (_, { getState }) => {
    try {
      const { folders } = getState();
      // TODO: api
      const folderId = folders?.selectedFolderId;
      console.log("##", { folderId });

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
  quizTypes.handleSubmitQuiz,
  async (_, { getState }) => {
    try {
      const { folders, quiz } = getState();
      const { quizzes, userAnswersMap } = quiz;

      // TODO: api
      const folderId = folders?.selectedFolderId;
      console.log("##", { folderId });

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
