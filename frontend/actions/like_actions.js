import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like: like
});

const removeLike = (like) => ({
    type: REMOVE_LIKE,
    like: like
});

const receiveErr = (errors) => ({
    type: RECEIVE_LIKE_ERRORS,
    errors: errors
});

export const createLike = (like) => (dispatch) => (
    APIUtil.createLike(like).then( (like) => { return dispatch(receiveLike(like)); })
);

export const deleteLike = (like) => (dispatch) => (
    APIUtil.deleteLike(like).then( () => dispatch(removeLike(like)))
);