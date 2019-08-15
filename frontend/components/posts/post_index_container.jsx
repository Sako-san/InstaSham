import { connect } from 'react-redux';
import {fetchAllUsers} from '../../actions/user_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    posts: (Object.keys(state.entities.posts).map(id => state.entities.posts[id])).reverse(),
});

const mapDispatchToProps = dispatch => ({
    openModal: (type, options) => dispatch(openModal(type, options)),
    
    fetchAllUsers: () => dispatch(fetchAllUsers()),

    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id)),

    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),

    logout: () => dispatch(logout().then( () => this.props.history.push('/login')))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);