import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterInitialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    deleteShowCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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
    logout(state, action) {
      state.isLogedIn = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
