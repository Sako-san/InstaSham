import * as userApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchAllUsers = () => dispatch => {
    return userApiUtil.fetchAllUsers().then( (users) => dispatch(receiveAllUsers(users)));
}

export const fetchUser = (user) => dispatch => {
    return userApiUtil.fetchUser(user).then((user) => dispatch(receiveUser(user)));
}

export const updateUser = (user) => dispatch => {
    return userApiUtil.updateUser(user).then((user) => dispatch(receiveUser(user)));
}


export const receiveAllUsers = () => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveUser = (user) => ({
    type: RECEIVE_ALL_USERS,
    user
});