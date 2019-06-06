import React from 'react';
import { Link } from 'react-router-dom';
import { dateUtil } from '../../util/date_post_util';

const PostIndexItem = ({ currentUser, post, deletePost }) => {  
    
    return (
        <li className="post-card">
            <div className='user-info-card'>
                <img height='45px' width='45px' className='prof-pic' src={window.blankprof} />
                <div className='names-card'>
                    <span>
                        {post.username}
                    </span>
                    <span className='location'>
                        {post.location}
                    </span>
                </div>
                <div className='dots'>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <br/>
            <div className= "card-img">
                <img className='post-image' src={post.photoUrl} />
            </div>
            <div className="card-prop-icons">
                <div className='left-box'>
                    <div className='icon1'>
                    <i className="far fa-heart"></i>
                    </div>
                    <div className='icon2'>
                    <i className="far fa-comment"></i>
                    </div>
                    <div className='icon3'>
                    <i className="fas fa-arrow-up"></i>
                    </div>
                </div>
                <div className='right-box'>
                    <div className='icon4'>
                        <i className="far fa-bookmark "></i>
                    </div>
                </div>
            </div>

            <br/>
            <div className='user-body'>
                <span className='username-body'>
                    {post.username}
                </span>
                <span className="card-prop">
                    {post.body}
                </span>
            </div>
            <br/>
            <span className="card-prop-timestamp">
                {dateUtil(post.created_at)}
            </span>
            <br/>
            
            <button className="card-prop-delete" onClick={() => deletePost(post.id)}>Delete</button>
        </li>);
};

export default PostIndexItem;