import { IAuth } from "./Authorisation";
import { IUser } from "./User";

export interface IUserAuthorisation {
    user:IUser;
    auth:IAuth;
}

