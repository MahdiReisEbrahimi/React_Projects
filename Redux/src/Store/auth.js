import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isLogedIn: false,
  users: [
    { userName: "mahdi", passWord: "ebi" },
    { userName: "mahdi", passWord: "ebi" },
  ],
  onlineUserName: "",
  passWord: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      state.isLogedIn = true;
      state.onlineUserName = action.payload;
    },
    logout(state) {
      state.isLogedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
