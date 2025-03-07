import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { filesType } from "./types";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [filesType.handleUploadFile],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.file"],
        // Ignore these paths in the state
        ignoredPaths: [],
      },
    }),
});
