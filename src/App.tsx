import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Dialogs, TypeDialogs, TypeMessages} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostType} from "./components/Profile/MyPosts/MyPosts";

export type TypeProps = {
    messages: Array<TypeMessages>
    dialogs: Array<TypeDialogs>
    posts: Array<PostType>
}

function App(props: TypeProps) {
    console.log()
    return (
        <BrowserRouter>
            <main className="App app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>} />
                    <Route path="/profile" render={() => <Profile posts={props.posts}/>} />
                    <Route path="/news" render={() => <News/>} />
                    <Route path="/music" render={() => <Music/>} />
                    <Route path="/settings" render={() => <Settings/>} />
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
