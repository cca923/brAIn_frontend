import { createSlice } from "@reduxjs/toolkit";

import {
  handleLoadFolders,
  handleAddFolder,
  handleRemoveFolder,
} from "./service";

const initialState = {
  folders: [],
  selectedFolderId: "",
  loadingMap: {
    loadFolders: false,
    addFolder: false,
    removeFolder: false,
  },
  error: null,
};

const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setSelectedFolderId: (state, action) => {
      const { folderId } = action.payload;

      state.selectedFolderId = folderId;
    },
  },
  extraReducers: (builder) => {
    builder
      // Load Folders API
      .addCase(handleLoadFolders.pending, (state) => {
        state.loadingMap.loadFolders = true;
        state.error = null;
      })
      .addCase(handleLoadFolders.fulfilled, (state, action) => {
        const { folders, selectedFolderId } = action.payload;

        state.loadingMap.loadFolders = false;
        state.folders = folders;
        state.selectedFolderId = selectedFolderId; // default folderId
      })
      .addCase(handleLoadFolders.rejected, (state, action) => {
        state.loadingMap.loadFolders = false;
        state.error = action.error.message;
      })
      // Add Folder API
      .addCase(handleAddFolder.pending, (state) => {
        state.loadingMap.addFolder = true;
        state.error = null;
      })
      .addCase(handleAddFolder.fulfilled, (state, action) => {
        const { folder } = action.payload;

        state.loadingMap.addFolder = false;
        state.folders = [...state.folders, folder];
        state.selectedFolderId = folder?.id; // set to new folderId
      })
      .addCase(handleAddFolder.rejected, (state, action) => {
        state.loadingMap.addFolder = false;
        state.error = action.error.message;
      })
      // Remove Folder API
      .addCase(handleRemoveFolder.pending, (state) => {
        state.loadingMap.removeFolder = true;
        state.error = null;
      })
      .addCase(handleRemoveFolder.fulfilled, (state, action) => {
        const { folderId } = action.payload;

        state.loadingMap.removeFolder = false;
        state.folders = state.folders.filter(
          (folder) => folder.id !== folderId
        );
        if (state.selectedFolderId === folderId && state.folders.length > 0) {
          state.selectedFolderId = state.folders[0]?.id;
        }
      })
      .addCase(handleRemoveFolder.rejected, (state, action) => {
        state.loadingMap.removeFolder = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedFolderId } = folderSlice.actions;
export default folderSlice.reducer;
