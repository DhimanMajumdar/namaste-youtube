import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload); // Add new message
      if (state.messages.length > LIVE_CHAT_COUNT) {
        state.messages.shift(); // Remove the oldest message if exceeding limit
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
