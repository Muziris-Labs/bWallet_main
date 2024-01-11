import { createSlice } from "@reduxjs/toolkit";

const pushSlice = createSlice({
  name: "push",

  initialState: {
    messages: [],
    pushSign: null,
    recentRequest: null,
    recentContact: null,
    currentContact: null,
  },

  reducers: {
    setPushSign: (state, action) => {
      state.pushSign = action.payload;
    },

    setCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },

    setRecentContact: (state, action) => {
      state.recentContact = action.payload;
    },

    updateRecentRequest: (state, action) => {
      state.recentRequest = action.payload;
    },

    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    updateMessages: (state, action) => {
      state.messages.push(action.payload);
    },

    resetContacts: (state) => {
      state.currentContact = null;
      state.recentContact = null;
      state.messages = [];
    },
  },
});

export const {
  setPushSign,
  setCurrentContact,
  setRecentContact,
  resetContacts,
  setMessages,
  updateMessages,
  updateRecentRequest,
} = pushSlice.actions;

export default pushSlice.reducer;
