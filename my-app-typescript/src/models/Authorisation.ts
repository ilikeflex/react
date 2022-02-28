export interface IAuth {
    hasAccessToFxReports():boolean;
    isMemberofHR():boolean;
}

export class Auth implements IAuth {

    private _hasAccessToFxReports:boolean = false;
    private _isMemberofHR:boolean = false;

    constructor(hasAccessToFxReports = false,isMemberofHR = false){
        this._hasAccessToFxReports = hasAccessToFxReports;
        this._isMemberofHR = isMemberofHR;
    }
    
    hasAccessToFxReports(): boolean {
        return this._hasAccessToFxReports;
    }
    isMemberofHR(): boolean {
        return this._isMemberofHR;
    }
    
}
