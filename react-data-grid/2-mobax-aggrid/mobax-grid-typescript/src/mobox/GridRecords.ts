import { action, makeAutoObservable, observable, autorun, computed } from "mobx";

export interface ICar {
    make:string,
    model:string,
    price:number
}

export class GridRecords {
    records = [
        { "make": "Porsche1", "model": "Boxter", "price": 72000 },
        { "make": "Ford1", "model": "Mondeo", "price": 32000 },
        { "make": "Ford1", "model": "Mondeo", "price": 32000 },
        { "make": "Toyota1", "model": "Celica", "price": 350001 },
        { "make": "Toyota1", "model": "Celica", "price": 35000 },
        /*{ "make": "Porsche1", "model": "Boxter", "price": 72000 },
        { "make": "Toyota1", "model": "Celica", "price": 35000 },
        { "make": "Toyota1", "model": "Celica", "price": 35000 },
        { "make": "Porsche1", "model": "Boxter", "price": 72000 },
        { "make": "Porsche1", "model": "Boxter", "price": 72000 },
        { "make": "Porsche1", "model": "Boxter", "price": 72000 },
        { "make": "Toyota1", "model": "Celica", "price": 35000 },
        { "make": "Porsche1", "model": "Boxter", "price": 72000 },
        { "make": "Ford1", "model": "Mondeo", "price": 32000 },
        { "make": "Ford1", "model": "Mondeo", "price": 32000 }*/
    ];

    constructor() {
        makeAutoObservable(this, {
            records: observable,
            changeRecords: action,
            list:computed
        });
        autorun(() => {console.log('auto run'); console.log(this.records.length)});
    }

    get list() {
        return this.records;
    }

    changeRecords(newRecord:ICar) {
         console.log('executed changeRecords')
        /*const record = this.records.find(record => record.price === 350001)
        if(record) { console.log('Records changed'); record.make = 'NewMake' } */


        //const newRecord:ICar = { "make": "Porsche1", "model": "Boxter", "price": 7200011 };
        //this.records[this.records.length] = newRecord;
        //this.records.push(newRecord);
        this.records = [ ...this.records, newRecord]
    }
}
