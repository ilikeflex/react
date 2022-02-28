//make intital call for the app in the mean time show the spinner

import React from 'react';
import ReactDOM from 'react-dom';
import { Spinner } from '@fluentui/react/lib/Spinner';
import reportWebVitals from './reportWebVitals';
import { Loading } from './components/loading/Loading'

/*
//export const loadApplication = () => {
function loadApplication() {    
    return ReactDOM.render(
        <React.StrictMode>
          <Loading />
        </React.StrictMode>,
        document.getElementById('root')
      );
}
*/

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
 
const numbers = interval(2000);
 
export const allIntialRequestComplete = numbers.pipe(take(1));
 
//takeFourNumbers.subscribe(x => console.log('Next: ', x));




