import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadFile, setUploadError } from "./slice";

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Async thunk for uploading files
export const uploadFileAsync = createAsyncThunk(
  "files/uploadFileAsync",
  async ({ file, folderId }, { dispatch }) => {
    try {
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

      // For now, just dispatch the regular action
      dispatch(uploadFile({ file, folderId }));

      return { fileName: file.name, folderId };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Async thunk for loading files for a folder
export const loadFilesForFolderAsync = createAsyncThunk(
  "files/loadFilesForFolderAsync",
  async (folderId, { dispatch }) => {
    try {
      // Simulate API call
      await delay(700);

      // You could make a real API call here:
      // const response = await fetch(`/api/folders/${folderId}/files`);
      // const data = await response.json();

      // For now, return mock data based on folder ID
      let files = [];

      if (folderId === "2") {
        files = [
          { id: "1", name: "File 1", type: "pdf" },
          { id: "2", name: "File 2", type: "ppt" },
          { id: "3", name: "File 3", type: "doc" },
          { id: "4", name: "File 4", type: "pdf" },
        ];
      }

      return { folderId, files };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);
