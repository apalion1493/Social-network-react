import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./redux/state";

ReactDOM.render(
  <React.StrictMode>
    <App profilePage={state.profilePage} messagePage={state.messagePage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
