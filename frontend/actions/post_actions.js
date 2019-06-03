import * as postApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const fetchPosts = () => dispatch => {
    return postApiUtil.fetchPosts()
        .then(posts => dispatch(receiveAllPosts(posts)))
};

export const fetchPost = (id) => dispatch => {
    return postApiUtil.fetchPost(id)
        .then(post => dispatch(receivePost(post)))
};

export const createPost = (post) => dispatch => {
    return postApiUtil.createPost(post)
        .then(post => dispatch(receivePost(post)))
};

export const updatePost = (post) => dispatch => {
    return postApiUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)))
};

export const deletePost = (postId) => dispatch => {
    return postApiUtil.deletePost(postId)
        .then(post => dispatch(removePost(postId)))
};

export const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});