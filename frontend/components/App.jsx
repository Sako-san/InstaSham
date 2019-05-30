import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import FeedContainer from './feed/feed_container';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';

const App = () => (
    <section>
        <header>
            <h1>Welcome to InstaSham</h1>
            <FeedContainer />
            {/* <SignupContainer /> */}
            {/* <FeedContainer /> */}
        </header>
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
    </section>
);


export default App;