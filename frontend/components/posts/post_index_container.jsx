import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { logout } from '../../actions/session_actions';
import PostIndex from './post_index';

const mapStateToProps = ({ session, entities: {users, posts}}) => ({
    currentUser: users[session.id],
    users: users,
    posts: (Object.keys(posts).map(id => posts[id])).reverse(),
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id)),

    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),

    logout: () => dispatch(logout().then( () => this.props.history.push('/login')))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);