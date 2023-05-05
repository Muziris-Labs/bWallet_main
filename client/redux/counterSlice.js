import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeButton: "send",
  activeSection: "portfolio",
  dialogHandler: false,
  web3AuthProvider: undefined,
  gaslessOnboarding: undefined,
  gaslessWallet: undefined,
  address: undefined,
  userInfo: undefined,
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
    setWeb3AuthProvider: (state, action) => {
      state.web3AuthProvider = action.payload;
    },
    setGaslessOnboarding: (state, action) => {
      state.gaslessOnboarding = action.payload;
    },
    setGaslessWallet: (state, action) => {
      state.gaslessWallet = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  setActiveButton,
  setActiveSection,
  setDialogHandler,
  setWeb3AuthProvider,
  setGaslessOnboarding,
  setGaslessWallet,
  setAddress,
  setUserInfo,
} = counterSlice.actions;

export default counterSlice.reducer;
