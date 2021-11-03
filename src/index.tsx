import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
    {id: 1, name: 'Name 1'},
    {id: 2, name: 'Name 2'},
    {id: 3, name: 'Name 3'},
    {id: 4, name: 'Name 4'},
];

const messagesData = [
    {id: 1, message: 'h1'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'bye'},
    {id: 4, message: 'yo'},
];

const postData = [
    {id: 1, like: 1, message: 'text 1'},
    {id: 2, like: 3, message: 'text 2'},
    {id: 3, like: 1, message: 'text 3'},
    {id: 4, like: 5, message: 'text 4'},
];


ReactDOM.render(
  <React.StrictMode>
    <App messages={messagesData} dialogs={dialogsData} posts={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
