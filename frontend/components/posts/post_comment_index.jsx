import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, deleteComment } from '../../actions/comment_actions';


class PostCommentIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.comments)
    }

    componentDidMount() {
        this.props.fetchComments(); 
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.comments.length > prevProps.comments.length) {
            this.props.fetchComments();
        };
    };

    render() {

        const deleteButton = this.props.comments.map( comment => {
            if ( comment.user_id === this.props.user_id && comment.post_id === this.props.post_id)
            return (
                <button key={comment.id} onClick={() => this.props.deleteComment(comment.id)}>Delete</button>
            )
        });

        const comments = this.props.comments.map(comment => {
            if( comment.post_id === this.props.post_id ){
                return (
                    <li key={comment.id}>
                        <span>{comment.username}</span>
                        <p>{comment.comment_body}</p>
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