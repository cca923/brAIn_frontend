import { createSlice } from "@reduxjs/toolkit";

import { handleLoadFiles, handleUploadFile, handleRemoveFile } from "./service";

const initialState = {
  files: [],
  loadingMap: {
    loadFiles: false,
    uploadFile: false,
    removeFile: false,
  },
  error: null,
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Load Files API
      .addCase(handleLoadFiles.pending, (state) => {
        state.loadingMap.loadFiles = true;
        state.error = null;
      })
      .addCase(handleLoadFiles.fulfilled, (state, action) => {
        const { files } = action.payload;

        state.loadingMap.loadFiles = false;
        state.files = files;
      })
      .addCase(handleLoadFiles.rejected, (state, action) => {
        state.loadingMap.loadFiles = false;
        state.error = action.error.message;
      })
      // Upload File API
      .addCase(handleUploadFile.pending, (state) => {
        state.loadingMap.uploadFile = true;
        state.error = null;
      })
      .addCase(handleUploadFile.fulfilled, (state, action) => {
        const { file } = action.payload;

        state.loadingMap.uploadFile = false;
        state.files = [...state.files, file];
      })
      .addCase(handleUploadFile.rejected, (state, action) => {
        state.loadingMap.uploadFile = false;
        state.error = action.error.message;
      })
      // Remove File API
      .addCase(handleRemoveFile.pending, (state) => {
        state.loadingMap.removeFile = true;
        state.error = null;
      })
      .addCase(handleRemoveFile.fulfilled, (state, action) => {
        const { fileId } = action.payload;

        state.loadingMap.removeFile = false;
        state.files = state.files?.filter((file) => file.id !== fileId);
      })
      .addCase(handleRemoveFile.rejected, (state, action) => {
        state.loadingMap.removeFile = false;
        state.error = action.error.message;
      });
  },
});

export default fileSlice.reducer;
