export interface IUser {
    getCountry():string;
    getDesignation():string;
    getEmployeeID():number;
    getName():string;
    getState():string;
    getdept():string;
}

export class User implements IUser {

    private _country:string;
    private _designation:string;
    private _employeeId:number;
    private _name:string;
    private _state:string;
    private _dept:string;

    constructor (employeeID:number, name:string, designation:string, state:string, country:string, dept:string ) {
        this._employeeId = employeeID;
        this._name = name;
        this._designation = designation;
        this._state = state;
        this._country = country;
        this._dept = dept;
    }
    getdept(): string {
        return this._dept;
    }

    getCountry(): string {
        return this._country;
    }
    getDesignation(): string {
        return this._designation;
    }
    getEmployeeID(): number {
        return this._employeeId;
    }
    getName(): string {
        return this._name;
    }
    getState(): string {
        return this._state;
    }
    
}

