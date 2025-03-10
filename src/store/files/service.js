import { createAsyncThunk } from "@reduxjs/toolkit";

import { filesTypes } from "../types";
import { fetchFiles } from "../../apis";
import { idFormatter } from "../utils";
import { setSelectedFolderId } from "../folders/slice";

import { setUploadError } from "./slice";

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const handleLoadFiles = createAsyncThunk(
  filesTypes.handleLoadFiles,
  async ({ folderId }, { dispatch }) => {
    try {
      const response = await fetchFiles({ folderId });
      const files = idFormatter(response);

      // Switch to this folder after successfully loads its files
      dispatch(setSelectedFolderId({ folderId }));

      return {
        files,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const handleUploadFile = createAsyncThunk(
  filesTypes.handleUploadFile,
  async ({ file }, { dispatch, getState }) => {
    try {
      const { folders } = getState();
      // TODO: api
      const folderId = folders?.selectedFolderId;
      console.log("##", { folderId });

      // Validate file type
      const fileType = file.name.split(".").pop().toLowerCase();
      const validTypes = ["pdf", "ppt", "doc", "pptx", "docx"];

      if (!validTypes.includes(fileType)) {
        dispatch(
          setUploadError(
            "Invalid file type. Please upload .pdf, .ppt, or .doc files."
          )
        );
        return Promise.reject("Invalid file type");
      }

      // Validate file size (2MB)
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      if (file.size > maxSize) {
        dispatch(setUploadError("File size exceeds 2MB limit."));
        return Promise.reject("File size too large");
      }

      // Simulate API upload
      await delay(1000);

      // You could make a real API call here:
      // const formData = new FormData();
      // formData.append('file', file);
      // formData.append('folderId', folderId);
      //
      // const response = await fetch('/api/files/upload', {
      //   method: 'POST',
      //   body: formData
      // });
      // const data = await response.json();

      return {
        file,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const handleRemoveFile = createAsyncThunk(
  filesTypes.handleRemoveFile,
  async ({ fileId }, { getState }) => {
    try {
      const { folders } = getState();
      // TODO: api
      const folderId = folders?.selectedFolderId;
      console.log("##", { folderId });

      // Simulate API call
      await delay(500);

      // You could make a real API call here:
      // await fetch(`/api/files/${fileId}`, {
      //   method: 'DELETE'
      // });

      return {
        fileId,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);
