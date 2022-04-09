import { Action } from "redux";
import { ActionsConstants } from "./actions";

import { IPingPongData } from "./PingPongData";

export interface IPingDataAction extends Action {
    type: "PING"
    data?: IPingPongData
}