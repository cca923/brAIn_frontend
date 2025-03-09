import { createAsyncThunk } from "@reduxjs/toolkit";

import { summaryTypes } from "../types";
import { MSG_TYPE } from "../../constants";

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const handleLoadSummary = createAsyncThunk(
  summaryTypes.handleLoadSummary,
  async (_, { getState }) => {
    try {
      const { folders } = getState();
      // TODO: api
      const folderId = folders?.selectedFolderId;
      console.log("##", { folderId });

      // Simulate API call
      await delay(700);

      const summary = "test\ntest\ntest\n**test**";

      return {
        summary,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);
