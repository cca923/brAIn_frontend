import { createAsyncThunk } from "@reduxjs/toolkit";

import { chatTypes } from "../types";
import { MSG_TYPE } from "../../constants";
import { postStartChat, postSendMessage } from "../../apis";

export const handleStartChat = createAsyncThunk(
  chatTypes.handleStartChat,
  async (_, { getState }) => {
    try {
      const { folders } = getState();
      const folderId = folders?.selectedFolderId;

      const response = await postStartChat({ folderId });
      const { sessionId, response: msg } = response || {};

      const message = {
        type: "server",
        message: msg,
      };

      return {
        sessionId,
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
      const { chat } = getState();

      const response = await postSendMessage({
        sessionId: chat?.sessionId,
        message,
      });
      const { sessionId, response: msg, feedback } = response || {};

      const serverMsg = {
        type: MSG_TYPE.SERVER,
        message: msg,
      };

      return {
        sessionId,
        message: serverMsg,
        feedback: feedback?.overallFeedback,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);
