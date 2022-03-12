import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ActionsConstants } from '../../components/action/actions';

// action creators
const fetchUser = (username:string) => ({ type: ActionsConstants.FETCH_USER, payload: username });
export const fetchUserFulfilled = (payload:string) => ({ type: ActionsConstants.FETCH_USER_FULFILLED, payload });

// epic
//TODO TypeCast into specific. Remove any
export const fetchUserEpic = (action$:any) => action$.pipe(
  ofType(ActionsConstants.FETCH_USER),
  mergeMap(action =>
    //@ts-ignore
    ajax.getJSON(`http://localhost:3000/user/${action.payload}`).pipe(
    //@ts-ignore
      map(response => fetchUserFulfilled(response))
    )
  )
);