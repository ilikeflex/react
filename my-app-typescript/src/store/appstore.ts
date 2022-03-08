import { createStore } from "redux"
import { counterReducer } from "./incrementReducer"


export const store = createStore(counterReducer)