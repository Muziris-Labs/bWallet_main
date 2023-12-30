"use client";

import { configureStore } from "@reduxjs/toolkit";

import tokensReducer from "./slice/tokensSlice.js";

export const tokensStore = configureStore({
  reducer: {
    token: tokensReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
