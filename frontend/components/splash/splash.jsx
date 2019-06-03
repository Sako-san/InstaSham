import React from 'react';
import {Link} from 'react-router-dom';
import SignupContainer from '../session_forms/signup_container';
import PostIndexContainer from '../posts/post_index_container';

const splash = ({ currentUser, logout }) => {

    const feedPage = () => (
        <>
            <img />
            <span>Welcome to Instasham, {currentUser.name}</span>
            <br />
            <button className="logout-button" onClick={logout}>Logout</button>
            <div> 
                <PostIndexContainer/>
            </div>
        </>
    );

    const signupForm = () => (
        <div>
            <div><SignupContainer /></div>
        </div>
    );
    return currentUser ? feedPage() : signupForm();
};


export default splash;