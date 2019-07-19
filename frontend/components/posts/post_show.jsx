import React from 'react';
import { connect } from 'react-redux';
import { fetchPost,  deletePost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, fetchComments, deleteComment } from '../../actions/comment_actions';

class PostShow extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)
    };

    render() {
        return (
            <div>Post Show Page</div>
        )
    };
};


const mapStateToProps = (state) => {
   return { 
       currentUser: state.session.id,
       users: state.entities.users,
       posts: (Object.keys(state.entities.posts).map(id => posts[id])),
       comments: Object.keys(state.entities.comments).map( id => state.entities.comments[id]),
   }
};

const mapDispatchToProps = dispatch => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
    deletePost: (id) => dispatch(deletePost(id)),

    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),

    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)