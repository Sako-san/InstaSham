import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts, fetchPost, createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';
import CreatePostForm from './create_post_form';

const mapStateToProps = (state, ownProps) => {
    return {
        post: {
            location: "",
            photoFile: null,
            photoUrl: null,
            body: ''
        }
    }
};

const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(createPost(post)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: (id) => dispatch(fetchPost(id)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);