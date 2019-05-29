import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';

const App = () => (
    <div>
        <header>
            <h1>Welcome to Instasham</h1>
        </header>
        {/* <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
        </Switch> */}
    </div>
);


export default App;