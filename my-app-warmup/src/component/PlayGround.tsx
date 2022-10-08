import { useEffect, useRef, useState } from "react";
import PlayGroundProps from "./PlayGroundProps";

let index:any = 0;

const PlayGround: React.FC<PlayGroundProps> = (props) => {

    const titleRef = useRef<HTMLInputElement>(null); 
    const [displayContent, setDisplayContent] = useState("Hello World");

    let intervalId:any;
    let counter:any = 0;
    

    useEffect(
        ()=>{
            console.log("Inside useEffect");
            init();
        },[]);

    const init =() => {

        if (!intervalId) {
            intervalId = setInterval(
                ()=>{
                    changeContent()
                }, 1000);
          }

    }

    const changeContent = () => {
        
        if( index === 10 ) { index = 0; }
        else { ++index; }


        let display =  `Inside Change Content ${index}`;
        //console.log(display);
        setDisplayContent(display);
    }


    const start = () => {
        intervalId = setInterval(changeContent, 1000);
    }

    const stop = () => {
        clearInterval(intervalId);
        intervalId = null;
    }

    const prev = () => {
        console.log('previous');
        index = index - 2;
    }

    const next = () => {
        index = index + 1 ;
    }

    

    return (
        <div>
            <h1>{props.title}</h1>
            {props.children}

            <div>
                {displayContent}
            </div>

            <div>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
           </div>

            <div id="divText">
                <input type='text' id='title' ref={titleRef} />
            </div>
        </div>
    );
}

export default PlayGround;