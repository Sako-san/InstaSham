import React from 'react';
import {Link} from 'react-router-dom';
import SignupContainer from '../session_forms/signup_container';
import PostIndexContainer from '../posts/post_index_container';
import CreatePostContainer from '../posts/create_post_form_container'

const splash = ({ currentUser, logout }) => {

    const feedPage = () => (
        <>  
            <section className='user-actions'>
            <div className='main-div'>
                <PostIndexContainer/>
            </div>
            <div className="profile-div">
                <div className='user-info'>
                    <img margin-top='4px' height='50px' width='50px' className='prof-pic' src={window.blankprof} />
                    <div className='names'>
                        <span>
                            {currentUser.name}
                        </span>
                        <span className='lighter-name'>
                            {currentUser.username}
                        </span>
                    </div>
                </div>
                <button className="logout-button" onClick={logout}>Logout</button>
                <div className='post-form'>
                    <CreatePostContainer />
                </div>
            </div>
            </section>
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