import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUserDetails: (state, action) => {
      return action.payload;
    },
    removeUserDetails: (state) => {
      return null;
    },
  },
});
export const { addUserDetails, removeUserDetails } = user.actions;
export default user.reducer;
