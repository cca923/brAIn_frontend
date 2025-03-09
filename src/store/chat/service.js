import { createAsyncThunk } from "@reduxjs/toolkit";

import { chatTypes } from "../types";
import { MSG_TYPE } from "../../constants";

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const handleLoadChat = createAsyncThunk(
  chatTypes.handleLoadChat,
  async (_, { getState }) => {
    try {
      const { folders } = getState();
      // TODO: api
      const folderId = folders?.selectedFolderId;
      console.log("##", { folderId });

      // Simulate API call
      await delay(700);

      const message = {
        type: "server",
        message: "This is first msg!",
      };

      return {
        message,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const handleSendMessage = createAsyncThunk(
  chatTypes.handleSendMessage,
  async ({ message = "" } = {}, { getState }) => {
    try {
      const { folders } = getState();
      // TODO: api
      const folderId = folders?.selectedFolderId;
      console.log("##", { folderId, message });

      // Simulate API call
      await delay(700);

      // Mock response
      const responses = {
        message: "This is response msg!",
        feedback:
          "Excellent discussion! You engaged thoroughly with all the topics.",
      };
      const serverMsg = {
        type: MSG_TYPE.SERVER,
        message: responses?.message,
      };

      return {
        message: serverMsg,
        feedback: responses?.feedback ?? "",
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);
