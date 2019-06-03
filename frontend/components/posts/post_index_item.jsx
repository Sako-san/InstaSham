import React from 'react';
import { Link } from 'react-router-dom';


class PostIndexItem extends React.Component {
  
    constructor(props) {
        super(props); 
    }
    
    render() {
        const {
            post,
            deletePost,
        } = this.props;

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
};

export default PostIndexItem;