import { createSlice } from "@reduxjs/toolkit";
import { loadFilesForFolderAsync } from "./service";

const initialState = {
  filesByFolder: {
    1: [],
    2: [
      { id: "1", name: "File 1", folderId: "2", type: "pdf" },
      { id: "2", name: "File 2", folderId: "2", type: "ppt" },
      { id: "3", name: "File 3", folderId: "2", type: "doc" },
      { id: "4", name: "File 4", folderId: "2", type: "pdf" },
    ],
    3: [],
  },
  isUploading: false,
  uploadError: null,
  loading: false,
  error: null,
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    uploadFile: (state, action) => {
      const { file, folderId } = action.payload;
      // Create new folder array if it doesn't exist
      if (!state.filesByFolder[folderId]) {
        state.filesByFolder[folderId] = [];
      }

      state.filesByFolder[folderId].push({
        id: Date.now().toString(),
        name: file.name,
        folderId,
        type: file.name.split(".").pop(),
      });

      state.uploadError = null;
    },
    setUploadError: (state, action) => {
      state.uploadError = action.payload;
    },
    removeFile: (state, action) => {
      const { fileId, folderId } = action.payload;
      state.filesByFolder[folderId] = state.filesByFolder[folderId].filter(
        (file) => file.id !== fileId
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle loadFilesForFolderAsync
      .addCase(loadFilesForFolderAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFilesForFolderAsync.fulfilled, (state, action) => {
        state.loading = false;
        const { folderId, files } = action.payload;
        state.filesByFolder[folderId] = files;
      })
      .addCase(loadFilesForFolderAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { uploadFile, setUploadError, removeFile } = fileSlice.actions;
export default fileSlice.reducer;
