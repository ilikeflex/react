import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { appConfig } from './configs/appConfig';
import { Loading } from './components/loading/Loading'
import { allIntialRequestComplete, getUserDetailsAndAuthorisation } from './init';

const envConfig = appConfig.getConfiguration();
console.log(envConfig.toString());

ReactDOM.render(
  <React.StrictMode>s
    <Loading />
  </React.StrictMode>,
  document.getElementById('root')
);

allIntialRequestComplete.subscribe(response => {
  getUserDetailsAndAuthorisation().subscribe(compleUserDetails => {
    console.log(' compleUserDetails ' + JSON.stringify(compleUserDetails))
    loadApplication();
    }
  );
})

const loadApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
