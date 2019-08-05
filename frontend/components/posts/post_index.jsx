import React from 'react';
import {Link} from 'react-router-dom';
import merge from 'lodash';
import PostIndexItem from './post_index_item';
import NavBar from '../nav_bar';


class PostIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchAllUsers();
    }

    render() {

        
        
        const posts = this.props.posts.map( post => {
            return ( <PostIndexItem
            key= {post.id}
            post= {post}
            currentUser = {this.props.currentUser}
            user={this.props.users[post.authorId]}
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

