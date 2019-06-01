import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import LoginSessionForm from './login';

const mapStateToProps = (state, ownProps) => {
    const errs = state.errors.session;
    const formType = 'Log In';
    const navLink = <Link to='/signup'>Sign Up</Link>;

    return { errs, formType, navLink };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);