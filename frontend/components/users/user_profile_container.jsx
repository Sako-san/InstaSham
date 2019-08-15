import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        comments: Object.values(state.entities.comments),
        currentUser: state.entities.users[state.session.id],
        posts: Object.values(state.entities.posts)
    };
};

const mapDispatchToProps = (dispatch) => ({
    openModal: (type, options) => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),

    fetchPosts: () => dispatch(fetchPosts()),
    
    fetchUser:  (userId) => dispatch(fetchUser(userId)),
    
    fetchComments: () => dispatch(fetchComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

