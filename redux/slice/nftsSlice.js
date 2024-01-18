import { createSlice } from "@reduxjs/toolkit";

const nftsSlice = createSlice({
  name: "nfts",

  initialState: {
    activeNft: {},
  },

  reducers: {
    setActiveNft: (state, action) => {
      state.activeNft = action.payload;
    },
  },
});
export const { setActiveNft } = nftsSlice.actions;

export default nftsSlice.reducer;
