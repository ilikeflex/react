import React, { useEffect, useMemo, useState } from "react";
import { ChildComponentA } from "./ChildComponentA";
import { ChildComponentB } from "./ChildComponentB";

export const SampleComponent : React.FC = () => {

    const [ counter, setCounter ] = useState(0);
    const [ passToComponentB, setPassToComponentB ] = useState('InitialValue');

    const mybuttonClick = () => {
        console.log("Click Me Clicked");
        
        setCounter((prevCounter)=>{
                console.log(`value of previous counter ${prevCounter}`);
                return prevCounter + 1;
         });


    }

    const childAToParent = (id:string) => {
        console.log(`Child To Parent Clicked ${id}`);

        setPassToComponentB((prevValue) => {
            console.log(`Previous Value ${prevValue}`);
            return `Values Passed From Component ${id}`;
        });
    }

    const childBToParent = (id:string) => {
        console.log(`Child To Parent Clicked ${id}`);
    }

    useEffect(()=>{
        //public api to get Result
        //https://pokeapi.co/api/v2/pokemon/ditto
        console.log('useEffect should be called only once');
    },[]);


    useEffect(()=>{
        //public api to get Result
        //https://pokeapi.co/api/v2/pokemon/ditto
        console.log('should be published when counter is clicked');
    },[counter]);
    

  //memo child not rendering when state update, only render child props update.
  const memoChildComponentB = useMemo(() => <ChildComponentB name={passToComponentB} onIncrement={childBToParent}></ChildComponentB>,
   [passToComponentB]);

    return (
        <div>
           <button onClick={mybuttonClick}>Click Me</button>     
           <label>How many times {counter} clicked </label>
           {/** ChildComponentA will always be refreshed when parent component is rendered */}
           <ChildComponentA name="Yahoo" onIncrement={childAToParent} ></ChildComponentA>
           {/** memoChildComponent will not be rendered when parent component is rendered */}
           {memoChildComponentB}
        </div>
    )
}