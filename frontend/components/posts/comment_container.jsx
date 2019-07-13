import { connect } from "react-redux";
import { createComment, fetchAllComments, deleteComment} from '../../actions/comment_actions';
import CreateCommentForm from './comment_form';

const mapStateToProps = ( state ) => {
    return {
        comment: state.entities.comments,
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    fetchAllComments: () => dispatch(fetchAllComments()),
    deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm)