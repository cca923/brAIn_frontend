import { createSlice } from "@reduxjs/toolkit";

import { MSG_TYPE } from "../../constants";

import { handleLoadChat, handleSendMessage } from "./service";

const initialState = {
  messages: [
    {
      type: MSG_TYPE.SERVER,
      message:
        "Welcome to AI Chat Learning! I'm here to enhance your learning experience.",
    },
  ],
  feedback: "",
  loadingMap: {
    loadChat: false,
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
      // Load Chat
      .addCase(handleLoadChat.pending, (state) => {
        state.loadingMap.loadChat = true;
        state.error = null;
      })
      .addCase(handleLoadChat.fulfilled, (state, action) => {
        const { message } = action.payload;

        state.loadingMap.loadChat = false;
        state.messages = [...state.messages, message];
      })
      .addCase(handleLoadChat.rejected, (state, action) => {
        state.loadingMap.loadChat = false;
        state.error = action.error.message;
      })
      // Send Message
      .addCase(handleSendMessage.pending, (state) => {
        state.loadingMap.sendMessage = true;
        state.error = null;
      })
      .addCase(handleSendMessage.fulfilled, (state, action) => {
        const { message, feedback } = action.payload;

        state.loadingMap.sendMessage = false;
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
