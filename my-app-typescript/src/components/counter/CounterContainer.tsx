import { Counter  } from "./Counter";

import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "../../store/rootState";
import { ActionsConstants } from "../action/actions";


const mapState = (state: RootState) => {
  console.log(` Counter maptoState is called -> Counter is refreshed ${JSON.stringify(state)}` )
  return {
    value: state.value,
    valueFromEpic: state.valueFromEpic
  }
}

//https://react-redux.js.org/api/connect ( Documentation Link )
//Pasing Without explicit parameters(dispatch, ownProps)
/* const mapDispatch = {
    onIncrement: () => ({ type: ActionsConstants.INCREMENT }),
    onDecrement: () => ({ type: ActionsConstants.DECREMENT }),
    onIncrementByCustomValue: () => ({
        type: ActionsConstants.CUSTOM_INCREMENT,
        value: 10
    }),
    runEpic: () => ({
      type: ActionsConstants.PING,
      data: 'epicParameter'
    })

} */

const mapDispatch = (dispatch, ownProps) => ({
  onIncrement: () => ({ type: ActionsConstants.INCREMENT }),
  onDecrement: () => ({ type: ActionsConstants.DECREMENT }),
  onIncrementByCustomValue: () => ({
      type: ActionsConstants.CUSTOM_INCREMENT,
      value: 10
  }),
  runEpic: () => ({
    type: ActionsConstants.PING,
    data: 'epicParameter'
  }),
  dispatch
})

const connector = connect(mapState, mapDispatch);

//Manually Typing connect
//values which are coming from State
interface StateProps {
  value: number;
  valueFromEpic: string
}

//action dispatcher
interface DispatchProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementByCustomValue: () => void;
  runEpic: () => void;
  dispatch: any;
}

//own props
interface OwnProps {
  backgroundColor: string
}

export type Props = StateProps & DispatchProps & OwnProps;

export default connector(Counter)



//https://react-redux.js.org/using-react-redux/usage-with-typescript#inferring-the-connected-props-automatically
//#Inferring The Connected Props Automatically

/* export type PropsFromRedux = ConnectedProps<typeof connector>

export interface Props extends PropsFromRedux {
    backgroundColor: string
} */

//Inferring The Connected Props Automatically End