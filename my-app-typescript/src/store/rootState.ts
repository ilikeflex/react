export interface IRootState {
    value:number ;
    valueFromEpic: string
}

export class RootState implements IRootState {
    value: number = 100;
    valueFromEpic: string = 'NULL';
}