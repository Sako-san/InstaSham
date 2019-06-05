import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, deletePost }) => { 
    return (
        <li className="post-card">
            <div className='user-info-card'>
                <img height='50px' width='50px' className='prof-pic' src={window.timprof} />
                <div className='names-card'>
                    <span>
                        {post.username}
                    </span>
                    <span className='location'>
                        {post.location}
                    </span>
                </div>
            </div>
            <br/>
            <div className= "card-img">
                <img height="500px" width="400px" src={post.photoUrl} />
            </div>
            <div className="card-prop-icons">
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
                <i class="fas fa-arrow-up"></i>
            </div>
            <br/>
            <span className="card-prop">
                {post.body}
            </span>
            <br/>
            <span className="card-prop">
                {post.created_at}
            </span>
            <br/>
            <button className="card-prop" onClick={() => deletePost(post.id)}>Delete</button>
        </li>);
};

export default PostIndexItem;