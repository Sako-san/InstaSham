import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, deletePost }) => { 
    console.log(post.location)
    return (
        <li>
            {post.username}
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

export default PostIndexItem;