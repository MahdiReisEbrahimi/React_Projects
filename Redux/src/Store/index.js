import { createStore } from "redux";

const initialData = { counter: 0, showCounter: true };

function counterReducer(state = initialData, action) {
  if (action.type === "increment")
    return { counter: state.counter + 1, showCounter: state.showCounter };
  if (action.type === "dec")
    return { counter: state.counter - 1, showCounter: state.showCounter };
  if (action.type === "increase")
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  if (action.type === "deleteShowCounter")
    return { showCounter: !state.showCounter, counter: state.counter };
  return state;
}

const store = createStore(counterReducer);

export default store;
