import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import UserProfile from './user_profile';
import { Link } from 'react-router-dom';

const mapStateToProps = ({session,  entities: {users, posts}}) => ({
    currentUser: users[session.id],
    posts: (Object.keys(posts).map(id => posts[id])).reverse(),
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: (id) => dispatch(fetchPost(id)),
    fetchUser:  (user) => dispatch(fetchUser(user)),
 
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

