import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchSummary } from "../../apis";
import { summaryTypes } from "../types";
import { MSG_TYPE } from "../../constants";

export const handleLoadSummary = createAsyncThunk(
  summaryTypes.handleLoadSummary,
  async (_, { getState }) => {
    try {
      const { folders } = getState();
      const folderId = folders?.selectedFolderId;

      const response = await fetchSummary({ folderId });
      const { summary } = response || {};

      return {
        summary,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);
