import React, { useEffect, useState } from "react";

import './playGroundWebsockets.css'
import { Stock } from "./Stocks";

let stockFromServer:Stock[] = [];

//Typescript 
//https://www.carlrippon.com/typescript-dictionary/
let collection:Map<string,Stock> = new Map();

export const PlayGroundWebsockets : React.FunctionComponent<unknown> = (props:unknown) => {

    const [ stockCollection, setStockCollection] = useState<Stock[]>([]);

    useEffect(()=>{

        const populateStocks = () => {

            setStockCollection((prevState:Stock[]) => {
                
                let result:Stock[] = [ ...Array.from(collection.values())];
                console.log(`Inside populateStocks`);
                //console.log(`Inside populateStocks ${JSON.stringify(result)}`)
                return result;
            });

            stockFromServer = [];
        }

        setInterval(populateStocks, 1000);
    },[collection])    

    const connectToWebSockets = () => {
        
        const socket = new WebSocket('ws://localhost:8025/ws/chat');

        // Connection opened
        socket.addEventListener('open', function (event) {
            console.log('Message from server open=', JSON.stringify(event));
            socket.send('Hello Server!');
        });
        
        // Listen for messages
        socket.addEventListener('message', function (event) {

            const newObject = JSON.parse(event.data);
            const stock:Stock = ({id: newObject.stock.id, price: newObject.stock.price, ticker: newObject.stock.ticker, name: newObject.stock.name,
                change: newObject.stock.change, percentChange: newObject.stock.percentChange});
            collection.set(stock.ticker,stock);
            stockFromServer.push(stock);
            console.log(`stock=${JSON.stringify(newObject.stock)} stockFromServer.length=${stockFromServer.length}`);
            
        });
      
        socket.addEventListener('error', function (event) {
            console.log('Message from server error=', JSON.stringify(event));
        });

        socket.addEventListener('close', function (event) {
            console.log('Message from server close=', JSON.stringify(event));
        });

    }   

    const displayStocks = () => {
        console.log(`Length = ${stockFromServer.length} Keys.length = ${Object.keys(collection).length}
        Values.length = ${Object.values(collection).length}`);

        /* setStockCollection((prevState:Stock[]) => {
            let result:Stock[] = [ ...prevState, ...stockFromServer];
            return result;
        }); */

        setStockCollection((prevState:Stock[]) => {
            //let result:Stock[] = [ ...prevState, ...stockFromServer];
            //console.log(`prevState = ${JSON.stringify(prevState)} stockFromServer = ${JSON.stringify(stockFromServer)}
            //result = ${JSON.stringify(result)}`);
            
            let result:Stock[] = [ ...Array.from(collection.values())];
            return result;
        });

        stockFromServer = [];
    }

    return (       

        <div>
            <label>Length={stockCollection.length}</label>
            WebSockets
            <button onClick={connectToWebSockets}>Connect</button>
            <button onClick={displayStocks}>Display</button>
            <div>
                { stockCollection.map((value:Stock,index:number,array:Stock[])=>{
                    return (
                        <div className='stock-table' key={value.id}>
                            <div className='flex-item0'>{value.id}</div>
                            <div className='flex-item1'>{index}</div>
                            <div className='flex-item2'>{value.ticker}</div>
                            <div className='flex-item3'>{value.name}</div>
                            <div className='flex-item4'>{value.price}</div>
                            <div className={value.change === 'pos' ? 'pos' : 'neg'}>{value.change}</div>
                            <div className='flex-item6'>{value.percentChange}</div>
                        </div>    
                    )
                })}
            </div>
            
        </div>
    )
}