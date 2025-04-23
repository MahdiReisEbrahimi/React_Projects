import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./events";
import counterSlice from "./counter";

const store = configureStore({
  reducer: {				
    counter: counterSlice,	
    events : eventsSlice,		
},
});

export default store;
