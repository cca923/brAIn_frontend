import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { quizTypes } from "../types";
import { fetchQuizzes, postQuizzesResult } from "../../apis";
import { idFormatter } from "../utils";

import { convertToUserAnswersMap, convertToUserAnswers } from "./utils";

export const handleLoadQuizzes = createAsyncThunk(
  quizTypes.handleLoadQuizzes,
  async (_, { getState }) => {
    try {
      const { folders } = getState();
      const folderId = folders?.selectedFolderId;

      const response = await fetchQuizzes({ folderId });
      const { _id: quizzesId, questions } = response || {};
      const quizzes = idFormatter(questions ?? []);
      const userAnswersMap = convertToUserAnswersMap(quizzes);

      return {
        quizzesId,
        quizzes,
        userAnswersMap,
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
      const { quiz } = getState();
      const { quizzesId, userAnswersMap } = quiz;
      const userAnswers = convertToUserAnswers(userAnswersMap);

      const response = await postQuizzesResult({
        quizId: quizzesId,
        userAnswers,
      });
      const { questions, correctCount, evaluation: feedback } = response || {};
      const quizzes = idFormatter(questions ?? []);

      return {
        quizzes,
        correctCount,
        feedback,
      };
    } catch (error) {
      toast.error(error?.message);
      return Promise.reject(error.message);
    }
  }
);
