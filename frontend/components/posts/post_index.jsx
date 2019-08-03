import React from 'react';
import {Link} from 'react-router-dom';
import merge from 'lodash';
import PostIndexItem from './post_index_item';
import NavBar from '../nav_bar';


class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts.map( post => {
            return ( <PostIndexItem
            key= {post.id}
            post= {post}
            user = {this.props.currentUser}
            deletePost={this.props.deletePost}
            createLike={this.props.createLike}
            deleteLike={this.props.deleteLike} 
            />)
        });


        return (
            <>
            <NavBar/>
            <ul className='post-index-ul' >
                {posts}
            </ul>
            </>
        );
    };
};

export default PostIndex;

