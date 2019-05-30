import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../actions/session_actions';
import SignupSessionForm from './signup';

const mapStateToProps = (state, ownProps) => {
    const errs = state.errors.session.errors;
    const formType = 'Sign Up';
    const navLink = <Link to='/login'>Login</Link>;

    return { errs, formType, navLink};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(createUser(user))
});


export default connect( mapStateToProps ,mapDispatchToProps)(SignupSessionForm);