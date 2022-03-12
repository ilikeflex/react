import { applyMiddleware, createStore } from "redux"
import { createEpicMiddleware } from "redux-observable"
import { rootEpic } from "./epics/epic";
import { counterReducer } from "./incrementReducer"

//https://redux-observable.js.org/docs/api/createEpicMiddleware.html
const epicMiddleware = createEpicMiddleware();
export const store = createStore(counterReducer,applyMiddleware(epicMiddleware)); 

/* 
problematic code
export const store = () => {
   const tempStore = createStore(counterReducer,applyMiddleware(epicMiddleware))
   epicMiddleware.run(rootEpic);
   return tempStore   
} */



epicMiddleware.run(rootEpic);
//https://redux.js.org/api/combinereducers/
