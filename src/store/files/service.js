import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { filesTypes } from "../types";
import { fetchFiles, deleteRemoveFile } from "../../apis";
import { idFormatter } from "../utils";

export const handleLoadFiles = createAsyncThunk(
  filesTypes.handleLoadFiles,
  async ({ folderId }) => {
    try {
      const response = await fetchFiles({ folderId });
      const files = idFormatter(response);

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
  async ({ file }, { getState }) => {
    try {
      const { folders } = getState();
      const folderId = folders?.selectedFolderId;

      // Validate file type
      const fileType = file.name.split(".").pop().toLowerCase();
      const validTypes = ["pdf", "ppt", "doc", "pptx", "docx"];
      if (!validTypes.includes(fileType)) {
        toast.error("Invalid file type.");
        return Promise.reject("Invalid file type");
      }

      // Validate file size (2MB)
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      if (file.size > maxSize) {
        toast.error("File size exceeds 2MB limit.");
        return Promise.reject("File size too large");
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("folderId", folderId);

      const response = await fetch(
        "https://brain-backend-xuh1.onrender.com/api/files",
        {
          method: "POST",
          body: formData,
        }
      );

      // const response = await postUploadFile({ folderId, file });
      const { _id: id, name } = response || {};

      return {
        file: { id, name },
      };
    } catch (error) {
      toast.error(error?.message);
      return Promise.reject(error.message);
    }
  }
);

export const handleRemoveFile = createAsyncThunk(
  filesTypes.handleRemoveFile,
  async ({ fileId }, { dispatch }) => {
    try {
      const response = await dispatch(deleteRemoveFile({ fileId }));
      const { message } = response || {};
      toast.success(message);

      return {
        fileId,
      };
    } catch (error) {
      toast.error(error?.message);
      return Promise.reject(error.message);
    }
  }
);
