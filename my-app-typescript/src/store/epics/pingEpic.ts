import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs';
import { ActionsConstants } from '../../components/action/actions';

//https://redux-observable.js.org/docs/basics/Epics.html
export const pingEpic = (action$:any) => action$.pipe(
  ofType(ActionsConstants.PING),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo({ type: ActionsConstants.PONG })
);