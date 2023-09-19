import React, { Component } from 'react';

let count = 0;
class ChildComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondValue: -1,
            secondInput: -1
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate count=" , ++count, "nextState=", nextState, 'nextProps=', nextProps, 'this.state=', this.state);
        if (nextProps.input % 3 === 0) {
            //this.setState({secondInput: -10});
            return false;
        } 
        //this.setState({secondInput: nextProps.input});
        return true;
    }

    render() {
        return <div>
            <h1>Hello, {this.props.input}!</h1>;
            <h1>secondInput Props, {this.props.secondInput}</h1>;
            <h1>secondInput state, {this.state.secondInput}</h1>;
            <br></br>
            <h1>state Value {this.state.stateValue}!</h1>;
            <button onClick={()=>this.setState({stateValue:100})}>Click Me</button>
            </div>
      }
}

export default ChildComponent;