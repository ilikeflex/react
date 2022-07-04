import { ActionsConstants } from "../components/action/actions"
import { IRootState } from "./rootState"

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
//TODO -> How to pass intital state if the initial state is big object
export function counterReducer(state:IRootState = { value: 0, valueFromEpic: 'NULL' }, action : any) {
  console.log(`Action Type= ${action.type}`)
  switch (action.type) {
    case ActionsConstants.INCREMENT:
      return { ...state, value: state.value + 1 }
    case ActionsConstants.DECREMENT:
      return { ...state, value: state.value - 1 }
    case ActionsConstants.CUSTOM_INCREMENT:
      return { ...state, value: state.value + action.value }
    case ActionsConstants.PONG:
      let newState = { ...state, valueFromEpic: action.data }
      return newState;
    default:
      return state
  }
}