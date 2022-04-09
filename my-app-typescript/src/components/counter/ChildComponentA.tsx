import { myChildComponentProps } from "../../models/HandsOn";

export const ChildComponentA : React.FC<myChildComponentProps> = (props:myChildComponentProps) => {

    console.log("Refresh ChildComponent A");

    const childComponentClick = () => {
        props.onIncrement('a');    
    }

    return (
        <div>
             <button onClick={childComponentClick}>ChildA Component</button>   
        </div>
    );
}