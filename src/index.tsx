import reportWebVitals from './reportWebVitals';
import {state, StateType, subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addDialogMessage, addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addDialogMessage={addDialogMessage} updateNewPostText={updateNewPostText} addPost={addPost} profilePage={state.profilePage} messagePage={state.messagePage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


rerenderEntireTree(state);
subscribe(rerenderEntireTree);
reportWebVitals();
