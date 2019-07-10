import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const postsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch( action.type ) {
        case RECEIVE_LIKE:
            newState[action.like.post_id].like_ids.push(action.like.like_ids)
            return newState;
        case REMOVE_LIKE:
            return newState
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