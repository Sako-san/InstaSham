import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
<<<<<<< HEAD
import { fetchPosts } from '../../actions/post_actions';
=======
import { fetchPosts, fetchPost } from '../../actions/post_actions';
>>>>>>> likes
import UserProfile from './user_profile';

const mapStateToProps = ({session,  entities: {users, posts}}) => ({
    currentUser: users[session.id],
<<<<<<< HEAD
    posts: (Object.keys(posts).map(id => posts[id])).reverse(),
=======
    posts: Object.keys(posts).map( id => posts[id]),
>>>>>>> likes
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: (id) => dispatch(fetchPost(id)),
<<<<<<< HEAD
    fetchUser:  (user) => dispatch(fetchUser(user)),
 
=======
    
    fetchUser:  (user) => dispatch(fetchUser(user)),
    
>>>>>>> likes
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

