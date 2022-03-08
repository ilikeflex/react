export interface IRootState {
    value:number ;
}

export class RootState implements IRootState {
    value: number = 100;
}