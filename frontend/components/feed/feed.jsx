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
        <button className="logout-button" onClick={logout}>Log Out</button>
        </>
    );

    return currentUser ? feedPage() : session();
};

export default Feed;

