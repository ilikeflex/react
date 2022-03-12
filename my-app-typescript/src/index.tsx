import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { appConfig } from './configs/appConfig';
import { Loading } from './components/loading/Loading'
import { allIntialRequestComplete, getUserDetailsAndAuthorisation } from './init';
import { Provider } from 'react-redux'
import { store } from './store/appstore';
import { AppError } from './components/loading/AppError';
import { IAppError } from './models/Error';

const envConfig = appConfig.getConfig();
console.log(envConfig.toString());

ReactDOM.render(
  <React.StrictMode>
    <Loading />
  </React.StrictMode>,
  document.getElementById('root')
);


allIntialRequestComplete.subscribe(response => {
  getUserDetailsAndAuthorisation().subscribe({
    next(compleUserDetails) {
      console.log(' Next in getUserDetailsAndAuthorisation ' + JSON.stringify(compleUserDetails));
      loadApplication();
    },
    error(err:IAppError) {
      console.log(' Error in getUserDetailsAndAuthorisation ' + JSON.stringify(err));
      loadErrorApplication(err);
    }
  });
})


const loadErrorApplication = (error:IAppError) => {
  //https://stackoverflow.com/questions/52491832/how-to-use-document-getelementbyid-method-in-typescript
  const el:HTMLElement = document.getElementById('root')!;
  ReactDOM.unmountComponentAtNode(el);
  ReactDOM.render(
    <React.StrictMode>
      <AppError error={error}/>
    </React.StrictMode>,
    el
  );

}

const loadApplication = () => {
  //https://stackoverflow.com/questions/52491832/how-to-use-document-getelementbyid-method-in-typescript
  const el:HTMLElement = document.getElementById('root')!;
  ReactDOM.unmountComponentAtNode(el);
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    el
  );
}

//loadApplication();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
