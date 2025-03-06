import { createSlice } from "@reduxjs/toolkit";
import { loadFoldersAsync } from "./service";

const initialState = {
  folders: [
    { id: "1", name: "IT 5004 Enterprise Systems", selected: false },
    { id: "2", name: "CS5344 Big-Data Analytics", selected: true },
    { id: "3", name: "IT5003 Data Structures and Algorithms", selected: false },
  ],
  currentFolder: "2",
  isAddingFolder: false,
  loading: false,
  error: null,
};

const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    selectFolder: (state, action) => {
      state.currentFolder = action.payload;
      state.folders = state.folders.map((folder) => ({
        ...folder,
        selected: folder.id === action.payload,
      }));
    },
    toggleAddFolder: (state) => {
      state.isAddingFolder = !state.isAddingFolder;
    },
    addFolder: (state, action) => {
      const newFolder = {
        id: Date.now().toString(),
        name: action.payload,
        selected: false,
      };
      state.folders.push(newFolder);
      state.isAddingFolder = false;
    },
    removeFolder: (state, action) => {
      state.folders = state.folders.filter(
        (folder) => folder.id !== action.payload
      );
      if (state.currentFolder === action.payload && state.folders.length > 0) {
        state.currentFolder = state.folders[0].id;
        state.folders[0].selected = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle loadFoldersAsync
      .addCase(loadFoldersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFoldersAsync.fulfilled, (state, action) => {
        state.loading = false;
        // We don't set folders here because the thunk dispatches selectFolder directly
        // which updates the state appropriately
      })
      .addCase(loadFoldersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectFolder, toggleAddFolder, addFolder, removeFolder } =
  folderSlice.actions;
export default folderSlice.reducer;
