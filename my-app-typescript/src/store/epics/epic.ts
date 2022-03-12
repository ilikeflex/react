import { combineEpics } from "redux-observable";
import { fetchUserEpic } from "./fetchUserEpic";
import { pingEpic } from "./pingEpic";


export const rootEpic =  combineEpics (
    pingEpic,
    fetchUserEpic
)