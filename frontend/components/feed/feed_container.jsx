import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import FeedIndex from './feed_index';

const mapStateToProps = ({ session, entities: {users, posts}}) => ({
    currentUser: users[session.id],
    posts: Object.keys(posts).map(id => posts[id]),
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (post) => dispatch(deletePost(post.id)),

    logout: () => dispatch(logout().then( () => this.props.history.push('/login')))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);