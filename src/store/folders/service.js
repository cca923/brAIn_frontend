import { createAsyncThunk } from "@reduxjs/toolkit";

import { foldersTypes } from "../types";

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const handleLoadFolders = createAsyncThunk(
  foldersTypes.handleLoadFolders,
  async ({ folderId } = {}) => {
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

      return {
        folderId,
        folders,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const handleAddFolder = createAsyncThunk(
  foldersTypes.handleAddFolder,
  async ({ name }, { getState }) => {
    try {
      const { folders } = getState();
      // TODO: api
      const folderId = folders?.selectedFolderId;
      console.log("##", { folderId });

      // Simulate API call
      await delay(500);

      // You could make a real API call here:
      // const response = await fetch('/api/folders', {
      //   method: 'POST',
      //   body: JSON.stringify({ name }),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      // const data = await response.json();

      return {
        name,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const handleRemoveFolder = createAsyncThunk(
  foldersTypes.handleRemoveFolder,
  async (_, { getState }) => {
    try {
      const { folders } = getState();
      // TODO: api
      const folderId = folders?.selectedFolderId;
      console.log("##", { folderId });

      // Simulate API call
      await delay(500);

      // You could make a real API call here:
      // await fetch(`/api/folders/${folderId}`, {
      //   method: 'DELETE'
      // });

      return {
        folderId,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);
