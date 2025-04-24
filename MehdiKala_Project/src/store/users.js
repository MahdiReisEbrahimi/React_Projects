import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
  users: [
    {
      userName: "m",
      phoneNumber: "09103508185",
      pass: "1",
      id: "n1",
    },
    {
      userName: "s",
      phoneNumber: "09165532325",
      pass: "3",
      id: "n2",
    },
    {
      userName: "g",
      phoneNumber: "09177578574",
      pass: "2",
      id: "n3",
    },
  ],
  onlineUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    onlineUser(state, action) {
      state.onlineUser = action.payload;
    },
    signup(state, action) {
      const enteredUser = {
        userName: action.payload.userName,
        phoneNumber: action.payload.phoneNumber,
        pass: action.payload.pass,
        id: action.payload.id,
      };
      state.users.push(enteredUser);
      state.onlineUser = enteredUser;
    },
    logout(state) {
      state.onlineUser = null;
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
