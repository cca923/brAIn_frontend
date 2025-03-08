import { createSlice } from "@reduxjs/toolkit";

import {
  handleLoadFolders,
  handleAddFolder,
  handleRemoveFolder,
} from "./service";

const initialState = {
  folders: [],
  selectedFolderId: "",
  isAddingFolder: false,
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
    toggleAddFolder: (state) => {
      state.isAddingFolder = !state.isAddingFolder;
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
        const { folderId, folders } = action.payload;

        state.loadingMap.loadFolders = false;
        state.folders = folders;
        state.selectedFolderId = folderId;

        // Handle default id
        if (!folderId) {
          state.selectedFolderId = state.folders[0].id;
          state.folders[0].selected = true;
        }
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
        const { name } = action.payload;
        const newFolder = {
          id: Date.now().toString(),
          name,
          selected: false,
        };

        state.loadingMap.addFolder = false;
        state.folders.push(newFolder);
        state.isAddingFolder = false;
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
          state.selectedFolderId = state.folders[0].id;
          state.folders[0].selected = true;
        }
      })
      .addCase(handleRemoveFolder.rejected, (state, action) => {
        state.loadingMap.removeFolder = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleAddFolder } = folderSlice.actions;
export default folderSlice.reducer;
