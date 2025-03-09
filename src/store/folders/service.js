import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchFolders, postAddFolder, deleteRemoveFolder } from "../../apis";
import { addToast } from "../toast/slice";
import { foldersTypes } from "../types";
import { idFormatter } from "../utils";

export const handleLoadFolders = createAsyncThunk(
  foldersTypes.handleLoadFolders,
  async ({ folderId } = {}) => {
    try {
      const response = await fetchFolders();
      const folders = idFormatter(response);

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
  async ({ name: reqName }, { dispatch }) => {
    try {
      const response = await postAddFolder({ name: reqName });
      const { _id: id, name } = response || {};
      dispatch(
        addToast({ message: "Folder added successfully.", type: "success" })
      );

      return {
        folder: { id, name },
      };
    } catch (error) {
      dispatch(addToast({ message: error?.message, type: "error" }));
      return Promise.reject(error.message);
    }
  }
);

export const handleRemoveFolder = createAsyncThunk(
  foldersTypes.handleRemoveFolder,
  async ({ folderId }, { dispatch }) => {
    try {
      const response = await deleteRemoveFolder({ folderId });
      const { message } = response || {};
      dispatch(addToast({ message, type: "success" }));

      return {
        folderId,
      };
    } catch (error) {
      dispatch(addToast({ message: error?.message, type: "error" }));
      return Promise.reject(error.message);
    }
  }
);
