import { createSlice } from "@reduxjs/toolkit";

const tokensSlice = createSlice({
  name: "tokens",

  initialState: {
    activeToken: {},
  },

  reducers: {
    setActiveToken: (state, action) => {
      state.activeToken = action.payload;
    },
  },
});

export const { setActiveToken } = tokensSlice.actions;

export default tokensSlice.reducer;
