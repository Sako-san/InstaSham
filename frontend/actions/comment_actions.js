import * as commentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveAllComments = (comments) => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments: comments
    };
};

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment: comment
    };
};

const removeComment = (comment) => {
    return {
        type: REMOVE_COMMENT,
        comment: comment
    };
};

export const createComment = ( comment ) => (dispatch) => (
    commentAPIUtil.createComment(comment).then( (comment) => { return dispatch(receiveComment(comment)); })
);

export const fetchComments = () => (dispatch) => (
    commentAPIUtil.fetchComments().then( (comments) => { return dispatch(receiveAllComments(comments)); })
);

export const deleteComment = (comment) => (dispatch) => (
    commentAPIUtil.deleteComment(comment).then( () => { return dispatch(removeComment(comment)); })
);