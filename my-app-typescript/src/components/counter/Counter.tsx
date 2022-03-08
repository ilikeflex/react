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

    return (
        <p>
        Clicked: {props.value} times
        {' '}
        <button onClick={props.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={props.onDecrement}>
          -
        </button>
        {' '}
        <button onClick={incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={incrementAsync}>
          Increment async
        </button>
      </p>
    );
};