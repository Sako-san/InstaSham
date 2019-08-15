import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

const UserInfo = ({ user }) => {
    // debugger
    return(
        <img height='45px' width='45px' className='prof-pic' src={user.photoUrl} />
    );
}


const mapStateToProps = ( state ) => {
    return {
    currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
