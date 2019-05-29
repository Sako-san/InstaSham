import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import LoginSessionForm from './login';

// const mapStateToProps = (state, ownProps) => {
//     const errs = state.errors.session.errors;
//     const formType = 'Log In';
//     const navLink = <Link to='/signup'>Sign Up</Link>;

//     return { errs, formType, navLink };
// };

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     processForm: (user) => dispatch(login(user))
// });


// export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);