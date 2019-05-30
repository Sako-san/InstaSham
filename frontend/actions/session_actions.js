import * as seshApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => dispatch => {

    return seshApiUtil.login(user).then((user) => {
        return dispatch(receiveCurrentUser(user));
    }, (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
    });
};

export const logout = () => dispatch => {
    return seshApiUtil.logout().then((user) => {
        return dispatch(logoutCurrentUser());
    }, (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
    });
};

export const createUser = (user) => dispatch => {
    return seshApiUtil.createUser(user).then((user) => {
        return dispatch(receiveCurrentUser(user));
    }, (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
    });
};

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors= (errors) => ({
    type: RECEIVE_CURRENT_USER,
    errors
});
