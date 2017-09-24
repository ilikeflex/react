import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
		 <HelloWorld/>	
		<div>
		</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class HelloWorld extends Component {
	
  constructor(props) {
    super(props);
    this.state = {date: new Date(), count: 0};
  }
		
	
  componentDidMount() {
	console.log('componentDidMount');
  }

  componentWillUnmount() {
	console.log('componentWillUnmount');
  }
  
  handleOptionsButtonClick = (e) => {
	console.log('Count ' , this.state.count)  
	const tempCount = Number(this.state.count) +  1;  
	this.setState({count: tempCount});  
  }
  
  render() {
		return (
			<div>
				<br></br>
				 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
				 
				 <h2>It is {this.state.count}.</h2>
				<button onClick={this.handleOptionsButtonClick}>
					{this.props.button_title}
				</button>
			</div>		
		)
	}
}

HelloWorld.propTypes = { button_title: React.PropTypes.string };
HelloWorld.defaultProps = { button_title: 'Click Me' };

export default App;


/*
Part 3
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
		 <HelloWorld/>	
		<div>
		</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class HelloWorld extends Component {
  //	
  //constructor(props) {
  //  super(props);
    //Not Required When using es6 arrow functions
    //this.handleOptionsButtonClick = this.handleOptionsButtonClick.bind(this);
  //}
  
  handleOptionsButtonClick = (e) => {
	console.log('Hello World');
  }
  
  render() {
		return (
			<button onClick={this.handleOptionsButtonClick}>
			  Activate Lasers
			</button>
		)
	}
}

export default App;
*/

/*
Part 2
es6 without arrow functions
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
		 <HelloWorld/>	
		<div>
		</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class HelloWorld extends Component {
	
  constructor(props) {
    super(props);
    // Manually bind this method to the component instance...
    this.handleOptionsButtonClick = this.handleOptionsButtonClick.bind(this);
  }
  
  handleOptionsButtonClick(e) {
    // ...to ensure that 'this' refers to the component instance here.
    //this.setState({showOptionsModal: true});
	console.log('Hello World');
  }
  
  render() {
		return (
			<button onClick={this.handleOptionsButtonClick}>
			  Activate Lasers
			</button>
		)
	}
}

export default App;
*/


/*
Part 1
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
		 <HelloWorld/>	
		<div>
		</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class HelloWorld extends Component {
	render() {
		return (
			<p>Hello World</p>
		)
	}
}

export default App;
*/