import React, { Component } from 'react';
import './App.css';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import ChildComponent from './component/ChildComponent.js';

let input = 0;
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            rowData: [],
            colDefs: [
                {field: 'make'},
                {field: 'model'},
                {field: 'price', editable: 'true'},
            ],
            input: -1
        }
    }

    componentDidMount() {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then(result => result.json())
            .then(rowData => this.setState((prevState,currentProps) => {
                console.log("prevState=", prevState, 'currentProps=', currentProps, 'rowData=', rowData);
                return {
                    ...prevState,
                    rowData: rowData,
                    count: 100
                }
            }))
            //.then(rowData => this.setState({rowData}))
//            this.updateInput();

          setInterval(() => {
            this.setState((prevState,currentProps) => {
                //console.log("prevState=", prevState, 'currentProps=', currentProps, 'rowData=', rowData);
                return {
                    ...prevState,
                    input: prevState.input + 1,
                    secondInput: prevState.secondInput + 2
                }
            })
          },2000)

    }

    /* componentDidUpdate(prevProps, prevState) {
        console.log(" componentDidUpdate prevState=", prevState, 'prevProps=', prevProps, 'this.state=', this.state);
        return true;
    } */
    
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate nextState=", nextState, 'nextProps=', nextProps, 'this.state=', this.state);
        return true;
    } */
  

    /* updateInput() {
        this.setState({input:this.props.input});
        console.log("updateInput input=", input);
    } */

    

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{height: '200px', width: '600px'}}
            >
                <AgGridReact
                    pagination={true}
                    defaultColDef={{sortable: true, filter: true }}
                    rowData={this.state.rowData}                    
                    columnDefs={this.state.colDefs}
                    >

                {/* 
                     Recommended: use objects rather than declarative column definitions

                    <AgGridColumn field="make"></AgGridColumn>
                    <AgGridColumn field="model"></AgGridColumn>
                    <AgGridColumn field="price" editable= {true}></AgGridColumn>
                */}
                    
                </AgGridReact>
                <span>Value={this.state.count}</span>
                <button onClick={() => {
                    this.setState({count:200})
                     console.log("this.state=", this.state);
                }}>Select All</button>
                <br></br>
                <button onClick={() => {
                this.setState((prevState,currentProps) => {
                console.log("prevState=", prevState, 'currentProps=', currentProps, 'rowData=', rowData);
                return {
                    ...prevState
                }
            })
                }}>Second</button>
                <br></br>
                input={this.state.input}
                <br></br>
                <button onClick={() => {
                    console.log("this.props.input=", this.props.input);
                    this.setState({input: this.props.input + 1})
                }}>Increment Input</button>

                <ChildComponent input={this.state.input} secondInput={this.state.secondInput}></ChildComponent>
            </div>
        );
    }
}

export default App;