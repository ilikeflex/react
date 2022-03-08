import { Counter  } from "./Counter";

import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "../../store/rootState";

const mapState = (state: RootState) => ({
  value: state.value,
})

const mapDispatch = {
    onIncrement: () => ({ type: 'counter/incremented' }),
    onDecrement: () => ({ type: 'counter/decremented' }),
}

const connector = connect(mapState, mapDispatch);

//Manually Typing connect
//values which are coming from State
interface StateProps {
  value: number;
}

//action dispatcher
interface DispatchProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

//own props
interface OwnProps {
  backgroundColor: string
}

export type Props = StateProps & DispatchProps & OwnProps

export default connector(Counter)



//https://react-redux.js.org/using-react-redux/usage-with-typescript#inferring-the-connected-props-automatically
//#Inferring The Connected Props Automatically

/* export type PropsFromRedux = ConnectedProps<typeof connector>

export interface Props extends PropsFromRedux {
    backgroundColor: string
} */

//Inferring The Connected Props Automatically End