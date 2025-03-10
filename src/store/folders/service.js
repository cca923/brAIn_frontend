import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { fetchFolders, postAddFolder, deleteRemoveFolder } from "../../apis";
import { foldersTypes } from "../types";
import { idFormatter } from "../utils";

export const handleLoadFolders = createAsyncThunk(
  foldersTypes.handleLoadFolders,
  async () => {
    try {
      const response = await fetchFolders();
      const folders = idFormatter(response);

      // Load default files depends on folderId
      const selectedFolderId = folders?.[0]?.id;

      return {
        folders,
        selectedFolderId,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const handleAddFolder = createAsyncThunk(
  foldersTypes.handleAddFolder,
  async ({ name: reqName }) => {
    try {
      const response = await postAddFolder({ name: reqName });
      const { _id: id, name } = response || {};
      toast.success("Folder added successfully.");

      return {
        folder: { id, name },
      };
    } catch (error) {
      toast.error(error?.message);
      return Promise.reject(error.message);
    }
  }
);

export const handleRemoveFolder = createAsyncThunk(
  foldersTypes.handleRemoveFolder,
  async ({ folderId }) => {
    try {
      const response = await deleteRemoveFolder({ folderId });
      const { message } = response || {};
      toast.success(message);

      return {
        folderId,
      };
    } catch (error) {
      toast.error(error?.message);
      return Promise.reject(error.message);
    }
  }
);
