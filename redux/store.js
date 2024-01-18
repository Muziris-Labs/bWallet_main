"use client";

import { configureStore } from "@reduxjs/toolkit";

import setupReducer from "./slice/setupSlice.js";
import tokensReducer from "./slice/tokensSlice.js";
import modalsReducer from "./slice/modalsSlice.js";
import pushSlice from "./slice/pushSlice.js";
import nftsReducer from "./slice/nftsSlice.js";

export const store = configureStore({
  reducer: {
    push: pushSlice,
    setup: setupReducer,
    token: tokensReducer,
    modals: modalsReducer,
    nfts: nftsReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
