// store/thunks/folderThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFolder, removeFolder, selectFolder } from "./slice";

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Async thunk for adding a folder
export const addFolderAsync = createAsyncThunk(
  "folders/addFolderAsync",
  async (folderName, { dispatch }) => {
    try {
      // Simulate API call
      await delay(500);

      // You could make a real API call here:
      // const response = await fetch('/api/folders', {
      //   method: 'POST',
      //   body: JSON.stringify({ name: folderName }),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      // const data = await response.json();

      // For now, just dispatch the regular action
      dispatch(addFolder(folderName));

      return folderName;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Async thunk for removing a folder
export const removeFolderAsync = createAsyncThunk(
  "folders/removeFolderAsync",
  async (folderId, { dispatch }) => {
    try {
      // Simulate API call
      await delay(500);

      // You could make a real API call here:
      // await fetch(`/api/folders/${folderId}`, {
      //   method: 'DELETE'
      // });

      // For now, just dispatch the regular action
      dispatch(removeFolder(folderId));

      return folderId;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Async thunk for loading folders
export const loadFoldersAsync = createAsyncThunk(
  "folders/loadFoldersAsync",
  async (_, { dispatch }) => {
    try {
      // Simulate API call
      await delay(700);

      // You could make a real API call here:
      // const response = await fetch('/api/folders');
      // const data = await response.json();

      // For now, return mock data
      const folders = [
        { id: "1", name: "IT 5004 Enterprise Systems" },
        { id: "2", name: "CS5344 Big-Data Analytics" },
        { id: "3", name: "IT5003 Data Structures and Algorithms" },
      ];

      // Select the first folder by default
      dispatch(selectFolder("2"));

      return folders;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);
