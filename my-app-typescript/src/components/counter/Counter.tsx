import { ActionsConstants } from "../action/actions";
import { Props } from "./CounterContainer";

//export const Counter: React.FC = () => {
export const Counter: React.FC<Props> = (props:Props) => {  
    
    const incrementIfOdd = () => {
      if (props.value % 2 !== 0) {
        props.onIncrement();
      }
    }

    const incrementAsync = () => {
      setTimeout(props.onIncrement, 1000)
    }

    const runEpic = () => {
      props.runEpic();
    }

    const dispatchIncrement = () => { 
      props.dispatch({
        type: ActionsConstants.CUSTOM_INCREMENT,
        value: 10
      })
    }

    return (
      <p>
        Clicked: {props.value} times
        <br></br>
        Value From Epic: {props.valueFromEpic} 
        <br></br>
        {' '}
        <button onClick={props.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={props.onDecrement}>
          -
        </button>
        {' '}
        <button onClick={props.onIncrementByCustomValue}>
          Increment by 10
        </button>
        {' '}
        <button onClick={incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={incrementAsync}>
          Increment async
        </button>
        <button onClick={runEpic}>
          Try Epic
        </button>
        <button onClick={dispatchIncrement}>
          Dispatch Increment
        </button>
      </p>
    );
};