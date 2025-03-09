import { createSlice } from "@reduxjs/toolkit";

import { handleLoadSummary } from "./service";

const initialState = {
  summary: "",
  loadingMap: {
    loadSummary: false,
  },
  error: null,
};

const chatSlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    resetSummary: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Load Summary
      .addCase(handleLoadSummary.pending, (state) => {
        state.loadingMap.loadSummary = true;
        state.error = null;
      })
      .addCase(handleLoadSummary.fulfilled, (state, action) => {
        const { summary } = action.payload;

        state.loadingMap.loadSummary = false;
        state.summary = summary;
      })
      .addCase(handleLoadSummary.rejected, (state, action) => {
        state.loadingMap.loadSummary = false;
        state.error = action.error.message;
      });
  },
});

export const { resetSummary } = chatSlice.actions;
export default chatSlice.reducer;
