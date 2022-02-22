import cartSlice from "./cartSlice"
import productSlice from "./productSlice"
import { configureStore } from "@reduxjs/toolkit"

const reducer = {
    cart: cartSlice.reducer,
    product: productSlice.reducer
}

const store = configureStore({reducer:reducer});
console.log('store store ' + store.getState());

export default store; 


/* import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});



const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;


export default store; */

/* import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartSlice = createSlice ({
    name: 'cart',
    initialState : {showCounter:false},
    reducers: {
       toggleCartView(state) {
           state.showCounter = !state.showCounter; 
       },
    }
});

const store = configureStore({
    reducer: { counter: cartSlice.reducer },
});

console.log(store.getState());

export default store; */

