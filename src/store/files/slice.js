import { createSlice } from "@reduxjs/toolkit";
import { handleLoadFiles, handleUploadFile, handleRemoveFile } from "./service";

const initialState = {
  files: [],
  loadingMap: {
    loadFiles: false,
    addFile: false,
    removeFile: false,
  },
  uploadError: null,
  error: null,
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setUploadError: (state, action) => {
      state.uploadError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
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

      // Handle Add Folder Actions
      .addCase(handleUploadFile.pending, (state) => {
        state.loadingMap.addFile = true;
        state.error = null;
      })
      .addCase(handleUploadFile.fulfilled, (state, action) => {
        const { file, folderId } = action.payload;

        state.loadingMap.addFile = false;

        // Create new folder array if it doesn't exist
        if (!state.filesMap[folderId]) {
          state.filesMap[folderId] = [];
        }

        const item = {
          id: Date.now().toString(),
          name: file.name,
          folderId,
          type: file.name.split(".").pop(),
        };
        state.filesMap[folderId].push(item);
        state.uploadError = null;
      })
      .addCase(handleUploadFile.rejected, (state, action) => {
        state.loadingMap.addFile = false;
        state.error = action.error.message;
      })

      .addCase(handleRemoveFile.pending, (state) => {
        state.loadingMap.removeFile = true;
        state.error = null;
      })
      .addCase(handleRemoveFile.fulfilled, (state, action) => {
        const { fileId, folderId } = action.payload;

        state.loadingMap.removeFile = false;
        state.filesMap[folderId] = state.filesMap[folderId].filter(
          (file) => file.id !== fileId
        );
      })
      .addCase(handleRemoveFile.rejected, (state, action) => {
        state.loadingMap.removeFile = false;
        state.error = action.error.message;
      });
  },
});

export const { setUploadError } = fileSlice.actions;
export default fileSlice.reducer;
