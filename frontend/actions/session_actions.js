import * as seshApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = (user) => dispatch => {
    return seshApiUtil.login(user).then((user) => {
        dispatch(receiveCurrentUser(user));
    }, (errors) => {
        dispatch(receiveErrors(errors.responseJSON));
    });
};

export const createUser = (user) => dispatch => {
    return seshApiUtil.createUser(user).then((user) => {
        dispatch(receiveCurrentUser(user));
    }, (errors) => {
        dispatch(receiveErrors(errors.responseJSON));
    });
};

export const logout = () => dispatch => {
       return seshApiUtil.logout().then( user => {
        dispatch(logoutCurrentUser());
    }, (errors) => {
        dispatch(receiveErrors(errors.responseJSON));
    });
};

export const clearErrors = () => dispatch => {
    dispatch(receiveErrors([]))
};

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors= (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
});
