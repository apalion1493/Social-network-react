import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
    return (
        <main className="App app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Dialogs/>
                {/*<Profile/>*/}
            </div>
        </main>
    );
}

export default App;
