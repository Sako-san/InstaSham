import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { Link } from 'react-router-dom';

const mapStateToProps = ({session,  entities: {users, posts}}) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
    fetchUser:  (user) => dispatch(fetchUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

