import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import FeedContainer from './feed/feed_container';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';

const App = () => (
    <section>
        <header>
        </header>
        
        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
        </Switch>
    </section>
);


export default App;