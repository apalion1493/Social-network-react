import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addPost={addPost} profilePage={state.profilePage} messagePage={state.messagePage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
