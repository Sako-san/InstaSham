import React from 'react';
import {Link} from 'react-router-dom';
import merge from 'lodash'


class FeedIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts.map( post => {
            return ( <FeedIndexItem
            key= {post.id}
            post= {post}
            deletePost={this.props.deletePost} />
            )
        });

        return (
            <div>
                <ul>
                    {posts}
                </ul>
            </div>
        );
    };
};

export default FeedIndex;

