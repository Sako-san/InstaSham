import * as seshApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => dispatch => {
    return seshApiUtil.login(user).then((res) => {
        return dispatch(receiveCurrentUser(res));
    }, (res) => {
        return dispatch(receiveErrors(res.responseJSON));
    });
};

export const logout = () => dispatch => {
    return seshApiUtil.logout().then((res) => {
        return dispatch(logoutCurrentUser(res));
    }, (res) => {
        return dispatch(receiveErrors(res.responseJSON));
    });
};

export const signup = (user) => dispatch => {
    return seshApiUtil.signup(user).then((res) => {
        return dispatch(receiveCurrentUser(res));
    }, (res) => {
        return dispatch(receiveErrors(res.responseJSON));
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
