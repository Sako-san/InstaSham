import React from 'react';
import PostIndexItem from './post_index_item';
import NavBar from '../nav_bar';


class PostIndex extends React.Component {
    constructor(props){
        super(props)
    };

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchAllUsers();
    };

  
    render() {

        const { posts, users} = this.props;

        if ( !users) {
            return (
                <div>Loading...</div>
            )
        }
        // debugger
        
        const postItems = posts.map( post => {
            return ( <PostIndexItem
            key= {post.id}
            post= {post}
            postId= {post.id}
            author={users[post.authorId]}
            users= {users}
            currentUser= {this.props.currentUser.id}
            createLike= {this.props.createLike}
            deleteLike= {this.props.deleteLike}
            openModal= {this.props.openModal}
            />)
        });


        return (
            <>
            <NavBar
                currentUser={this.props.currentUser.id}/>
            <ul className='post-index-ul' >
                {postItems}
            </ul>
            </>
        );
    };
};

export default PostIndex;

