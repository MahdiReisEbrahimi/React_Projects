import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialData = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialData,
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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
