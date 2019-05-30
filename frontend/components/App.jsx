import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import FeedContainer from './feed/feed_container';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';

const App = () => (
    <section>
        <main>
            <SignupContainer />
            {/* <SignupContainer /> */}
            {/* <FeedContainer /> */}
        </main>
        {/* <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/signup" component={SignupContainer} />
        </Switch> */}
    </section>
);


export default App;