export interface IAppError {
    status?:number;
    statusText?:string;
    message?:string // This can be optional.
}

export interface IPropertyAppError {
    error:IAppError;
}