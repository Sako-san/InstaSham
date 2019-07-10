import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like: like
});

const removeLike = (id) => ({
    type: REMOVE_LIKE,
    id: id,
    post_id: id
});

const receiveErr = (errors) => ({
    type: RECEIVE_LIKE_ERRORS,
    errors: errors
});

export const createLike = (like) => (dispatch) => (
    APIUtil.createLike(like).then( (like) => { return dispatch(receiveLike(like)); }))

export const deleteLike = (post_id) => (dispatch) => (
    APIUtil.deleteLike(post_id).then((like) => dispatch(removeLike(post_id), errors => (dispatch(receiveErr(errors.responseJSON)))))
);