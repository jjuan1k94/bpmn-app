import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { ROOT_ID }  from './assets/types'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
  document.getElementById(ROOT_ID)
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
