import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, deletePost }) => { 
    return (
        <li className="post-card">
            <span className="card-prop">
                {post.username}
            </span>
            <br/>
            <span className="card-prop">
                {post.location}
            </span>
            <br/>
            <div className= "card-img">
                <img height="500px" width="400px" src={post.photoUrl} />
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