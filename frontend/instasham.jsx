import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout } from './util/session_api_util';


//testing
window.login = login;
window.logout = logout;



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();


    ReactDOM.render(<Root store={store}/>, root)
});