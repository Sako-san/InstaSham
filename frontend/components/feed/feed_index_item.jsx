import React from 'react';
import { Link } from 'react-router-dom';


const FeedIndexItem = ({ post, deletePost }) => {
    return (
        <li>
            {post.author_id} 
            <br/>
            {post.location}
            <br/>
            {post.body}
            <br/>
            {post.created_at}
            <br/>
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </li>);
};

export default FeedIndexItem;