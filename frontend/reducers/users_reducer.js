import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
    let newState = merge({}, oldState);
    Object.freeze(oldState);

    switch(action.type) {

        case RECEIVE_CURRENT_USER: 
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser });

        case RECEIVE_ALL_USERS:
            return merge({}, action.users);

        case RECEIVE_USER:
            return  merge({}, oldState, {[action.user.id]: action.user})

        case RECEIVE_FOLLOW:
            newState[action.follow.following_id].followerIds.push(action.follow.follower_id)
            newState[action.follow.follower_id].followingIds.push(action.follow.following_id)
            return newState

        case REMOVE_FOLLOW:
            newState[action.follow.following_id].followerIds =
                newState[action.follow.following_id].followerIds.filter( id => id !== action.follow.follower_id);
            newState[action.follow.follower_id].followingIds = 
                newState[action.follow.follower_id].followingIds.filter( id => id !== action.follow.following_id);
            return newState;

        default:
            return oldState;
    };  
};

export default usersReducer;
