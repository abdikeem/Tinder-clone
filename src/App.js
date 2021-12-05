import React from 'react';
import Header from './Header';
import Chat from "./Chat";
import TinderCards from "./TinderCards";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {/* Chat page */}
                    <Route path="/Chat">
                        <Chat />
                    </Route>
                    <Route path="/">
                        {/* Header */}
                        <Header />

                        {/* TinderCards */}
                        <TinderCards />
                    </Route>
                </Switch>

                

                

                {/* Button Below tinder Cards */}

                {/* Chats screen */}
                {/* Individual chat screen */}
            </Router>
        </div>
    )
}

export default App
