import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeButton: "send",
  activeSection: "portfolio",
  dialogHandler: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setDialogHandler: (state, action) => {
      state.dialogHandler = action.payload;
    },
  },
});

export const { setActiveButton, setActiveSection, setDialogHandler } =
  counterSlice.actions;

export default counterSlice.reducer;
