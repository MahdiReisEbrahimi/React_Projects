import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./events";
import counterSlice from "./counter";
import userSlice from "./users";


const store = configureStore({
  reducer: {				
    counter: counterSlice,	
    events : eventsSlice,		
    users : userSlice
},
});

export default store;
