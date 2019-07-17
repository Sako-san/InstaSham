import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, deleteComment } from '../../actions/comment_actions';


class PostCommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments(); 
    }
    

    // componentDidUpdate(prevProps) {
    //     if (this.props.comments.length > prevProps.comments.length) {
    //         this.props.fetchComments();
    //     };
    // };

    render() {

        const deleteButton = (commentId, userId, commentorId) => {
            if( userId === commentorId ){
                return (
                    <button key={commentId} onClick={() => this.props.deleteComment(commentId)}>Delete</button>
                )
            }
        };

        const comments = this.props.comments.map(comment => {
            if( comment.post_id === this.props.post_id ){
                return (
                    <li key={comment.id}>
                        <span>{comment.username}</span>
                        <p>{comment.comment_body}</p>
                        {deleteButton(comment.id, comment.user_id, this.props.user_id )}
                    </li>
                )
            };

        });

        return (
            <ul>
               {comments}
            </ul>
        )
    }
}



const mapStateToProps = (state) => {
    return ({
        comments: Object.keys(state.entities.comments).map( id => state.entities.comments[id]),
    })
};

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentIndex);