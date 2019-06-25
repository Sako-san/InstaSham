import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts, fetchPost, createPost } from '../../actions/post_actions';
import CreatePostForm from './create_post_form';

const mapStateToProps = (state, ownProps) => {
<<<<<<< HEAD
    const errs = state.errors.session;
    const formType = 'Create Post';

    return { errs, formType };
=======
    return {
        post: {
            location: "",
            photoFile: null,
            photoUrl: null,
            body: ''
        }
    }
>>>>>>> profiles
};

const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(createPost(post)),
<<<<<<< HEAD
    clearErrors: () => dispatch(clearErrors())
=======
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: (id) => dispatch(fetchPost(id))
>>>>>>> profiles
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);