import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    let newState ;

    switch( action.type ) {
        case RECEIVE_ALL_COMMENTS:
            newState = merge({}, oldState, action.comments)
            return newState;
        case RECEIVE_COMMENT:
            newState = merge({}, oldState, action.comment)
            return newState;
        case REMOVE_COMMENT:
            newState = merge({}, state);
            delete newState[action.commentId];
            return newState;
        default:
            return oldState;
    }
}

export default commentsReducer;