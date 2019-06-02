import React from 'react';
import {Link} from 'react-router-dom';


const Feed = ({ currentUser, logout }) => {

    const feedPage = () => (
        <>
        <img/>
        <span>Welcome to Instasham, {currentUser.name}</span>
        <br/>
        <button className="logout-button" onClick={logout}>Logout</button>
        </>
    );

};

export default Feed;

