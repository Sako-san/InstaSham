import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const postsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch( action.type ) {
        case RECEIVE_COMMENT:
            newState[action.comment.post_id].comment_ids.push(action.comment.id);
            return newState;
        case REMOVE_COMMENT:
            newState[action.comment.post_id].comment_ids = 
                newState[action.comment.post_id].comment_ids.filter( id => id !== action.comment.id);
            return newState;
        case RECEIVE_LIKE:
            newState[action.like.post_id].like_ids.push(action.like.user_id);
            return newState;
        case REMOVE_LIKE:
            newState[action.like.post_id].like_ids =
                newState[action.like.post_id].like_ids.filter( id => id !== action.like.like_id);
            return newState;
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_POST:
            return merge( {}, oldState, {[action.post.id]: action.post});
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        default:
            return oldState;
    };
};

export default postsReducer;