import React from 'react';
import { Link } from 'react-router-dom';


const FeedIndexItem = ({ post, deletePost }) => {
    return (
        <li>
            {post.author_id}
            {post.location}
            {post.body}
            {post.create_at}
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </li>);
};

export default FeedIndexItem;