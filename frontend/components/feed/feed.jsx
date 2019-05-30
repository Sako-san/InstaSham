import React from 'react';
import {Link} from 'react-router-dom';

const Feed = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <>
        <Link to='/login'>Login</Link>
        <br/>
        <Link to='/signup'>Sign Up</Link>
        </>
    );

    const feedPage = () => (
        <>
        <img/>
        <span>{currentUser.name}</span>
        <br/>
        <button className="logout-button" onClick={logout}>Log Out</button>
        </>
    );

    return currentUser ? feedPage() : sessionLinks();
};

export default Feed;

