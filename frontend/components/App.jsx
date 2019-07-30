import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import PostIndexContainer from './posts/post_index_container';
import UserProfileContainer from './users/user_profile_container';
import PostShow from './posts/post_show';

const App = () => (
    <section>
        <Switch>
            <ProtectedRoute exact path="/feed" component={PostIndexContainer} />
            <ProtectedRoute exact path="/postShow/:id" component={PostShow} />
            <ProtectedRoute exact path="/profile" component={UserProfileContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            
            <Route exact path='/' component={SplashContainer} />
        </Switch>
    </section>
);


export default App;