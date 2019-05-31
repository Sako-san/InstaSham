import React from 'react';
import {Link} from 'react-router-dom';


const Feed = ({ currentUser, logout }) => {
    const session = () => (
        <>
        </>
    );

    const feedPage = () => (
        <>
        <img/>
        <span>Welcome to Instasham, {currentUser.name}</span>
        <br/>
            <Link to='/login' className="logout-button" onClick={logout}>Log Out</Link>
        </>
    );

    return currentUser ? feedPage() : session();
};

export default Feed;

