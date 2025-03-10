import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action) => {
      const { message, type = "success" } = action.payload;
      const id = Date.now();
      const msg = { id, message, type };
      state.messages = [...state.messages, msg];
    },
    removeToast: (state) => {
      const restMessages = state.messages.slice(1);
      state.messages = restMessages;
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export const selectMessages = (state) => state.toast.messages;

export default toastSlice.reducer;
