import { myChildComponentProps } from "../../models/HandsOn";

export const ChildComponentB : React.FC<myChildComponentProps> = (props:myChildComponentProps) => {

    console.log("Refresh ChildComponent B");

    const childComponentClick = () => {
        props.onIncrement('b');    
    }

    return (
        <span>
             <button onClick={childComponentClick}>Click ChildComponentB </button>
             <label>{props.name}</label>   
        </span>
    );
}