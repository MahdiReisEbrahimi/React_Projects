import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "increment") return { counter: state.counter + 1 };
  if (action.type === "dec") return { counter: state.counter - 1 };
  if (action.type === "increase")
    return { counter: state.counter + action.amount };
  return state;
}

const store = createStore(counterReducer);

export default store;
