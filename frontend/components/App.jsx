import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import FeedContainer from './feed/feed_container';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <section>
        <header>
            <h1>Welcome to InstaSham</h1>
            <FeedContainer />
        </header>
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
    </section>
);


export default App;