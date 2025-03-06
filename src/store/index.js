import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["files/uploadFile"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.file"],
        // Ignore these paths in the state
        ignoredPaths: [],
      },
    }),
});
