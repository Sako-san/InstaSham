import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer';
import postsReducer from './posts_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    posts: postsReducer,
});

export default entitiesReducer;

