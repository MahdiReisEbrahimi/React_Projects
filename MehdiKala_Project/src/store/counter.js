import { createSlice } from "@reduxjs/toolkit";			
							
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
							
export const counterActions = counterSlice.actions;			
export default counterSlice.reducer;	