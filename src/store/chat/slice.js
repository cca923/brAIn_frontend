import { createSlice } from "@reduxjs/toolkit";

import { MSG_TYPE } from "../../constants";

import { handleStartChat, handleSendMessage } from "./service";

const initialState = {
  sessionId: "",
  messages: [
    {
      type: MSG_TYPE.SERVER,
      message:
        "Welcome to AI Chat Learning! I'm here to enhance your learning experience.",
    },
  ],
  feedback: "",
  loadingMap: {
    startChat: false,
    sendMessage: false,
  },
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setUserMessage: (state, action) => {
      const { message } = action.payload;
      const userMsg = { type: MSG_TYPE.USER, message };

      state.messages = [...state.messages, userMsg];
    },
    resetChat: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Start Chat
      .addCase(handleStartChat.pending, (state) => {
        state.loadingMap.startChat = true;
        state.error = null;
      })
      .addCase(handleStartChat.fulfilled, (state, action) => {
        const { sessionId, message } = action.payload;

        state.loadingMap.startChat = false;
        state.sessionId = sessionId;
        state.messages = [...state.messages, message];
      })
      .addCase(handleStartChat.rejected, (state, action) => {
        state.loadingMap.startChat = false;
        state.error = action.error.message;
      })
      // Send Message
      .addCase(handleSendMessage.pending, (state) => {
        state.loadingMap.sendMessage = true;
        state.error = null;
      })
      .addCase(handleSendMessage.fulfilled, (state, action) => {
        const { sessionId, message, feedback } = action.payload;

        state.loadingMap.sendMessage = false;
        state.sessionId = sessionId;
        state.messages = [...state.messages, message];
        state.feedback = feedback;
      })
      .addCase(handleSendMessage.rejected, (state, action) => {
        state.loadingMap.sendMessage = false;
        state.error = action.error.message;
      });
  },
});

export const { setUserMessage, resetChat } = chatSlice.actions;
export default chatSlice.reducer;
