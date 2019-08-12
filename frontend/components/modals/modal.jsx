import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deletePost, fetchPosts } from '../../actions/post_actions';
import CreatePostContainer from '../posts/create_post_form_container';
import { Link } from 'react-router-dom';


class Modal extends React.Component {

    constructor(props){
        super(props);

    }

    componentDidUpdate(){
        this.props.fetchPosts();
    }
    
    render(){

    const {closeModal, modal } = this.props;
    if(!modal) return null;
    
    let postId = modal.options

    let component;

    switch( modal.type ){
        case 'createPost':
            component =
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <CreatePostContainer />
                </div> 
            break;
        case 'postModal':
            component = 
                <div className='post-options' onClick={e => e.stopPropagation()}>
                <Link className='options-link' onClick={closeModal} to={`/postShow/${postId}`}>Go To Post</Link>
                    <label className='options' onClick={closeModal}>Cancel</label>
                </div>
            break;
        case 'currentUserPostModal':
            component = 
                <div className='post-options' onClick={e => e.stopPropagation()}>
                    <label className='options' onClick={deletePost(postId)}>Delete Post</label>
                <Link className='options-link' onClick={closeModal} to={`/postShow/${postId}`}>Go To Post</Link>
                    <label className='options' onClick={closeModal}>Cancel</label>
                </div>
            break;
        default: 
           return null;
    };

    return (
        <>
            <div className="modal-background" onClick={closeModal}>
                {component}
            </div>
        </>
    );
    };
};

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),

        fetchPosts: () => dispatch(fetchPosts()),

        deletePost: (postId) => dispatch(deletePost(postId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
