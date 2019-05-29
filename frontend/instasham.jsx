import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, createUser} from './util/session_api_util';
import configureStore from './store/store';
import * as seshApiUtil from './util/session_api_util';

//testing
window.login = login;
window.logout = logout;
window.createUser = createUser;
const store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();

    ReactDOM.render(<h1>Welcome to Instasham</h1>, root)
});