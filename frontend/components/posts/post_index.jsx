import React from 'react';
import {Link} from 'react-router-dom';
import merge from 'lodash';
import PostIndexItem from './post_index_item';


class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts.map( post => {
            return ( <PostIndexItem
            key= {post.id}
            post= {post}
            deletePost={this.props.deletePost} />
            )
        });

        return (
            <>
            <nav className="nav">
                <div className='insta-cam' >
                    <i className="fab fa-instagram"></i>
                </div>
                <span> Instasham</span>
            </nav>
            <ul className='post-index-ul' >
                {posts}
            </ul>
            </>
        );
    };
};

export default PostIndex;

