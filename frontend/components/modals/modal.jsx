import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deletePost, fetchPosts } from '../../actions/post_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import CreatePostContainer from '../posts/create_post_form_container';
import PostShow from '../posts/post_show';
import { Link } from 'react-router-dom';


class Modal extends React.Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
        this.follow_unfollow = this.follow_unfollow.bind(this);
    }

    componentDidUpdate(){
        this.props.fetchPosts();
    }

    handleSubmit(e) {
        e.preventDefault();

        const { modal } = this.props;

        this.props.deletePost(modal.options);
        this.props.closeModal();
    };

    follow(e) {
        e.preventDefault();

        const { modal, currentUser, createFollow} = this.props;

        createFollow({
            following_id: modal.options.authorId,
            follower_id: currentUser.id
        });
        this.props.closeModal();
    };

    unfollow(e) {
        e.preventDefault();
        
        const { modal, currentUser, deleteFollow } = this.props;

        deleteFollow({
            following_id: modal.options.authorId,
            follower_id: currentUser.id
        });
        this.props.closeModal();
    };

    follow_unfollow( currentUser, author ) {
        
        if ( currentUser.followingIds.includes(author)){
           return ( <label className='options' onClick={e => this.unfollow(e) }>Unfollow</label> )
        } else {
           return ( <label className='options' onClick={e => this.follow(e)}>follow</label> );
        }
    };
    
    render(){

    const { closeModal, modal } = this.props;
    if(!modal) return null;

    let postId;
    let authorId;

    if( modal.options ){
        postId = modal.options.postId;
        authorId = modal.options.authorId;
    }
    

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
                {this.follow_unfollow(this.props.currentUser, authorId)}
                <Link className='options-link' onClick={closeModal} to={`/postShow/${postId}`}>Go To Post</Link>
                    <label className='options' onClick={closeModal}>Cancel</label>
                </div>
            break;
        case 'currentUserPostModal':
            component = 
                <div className='post-options' onClick={e => e.stopPropagation()}>
                    <label className='options' onClick={ e => this.handleSubmit(e)}>Delete Post</label>
                <Link className='options-link' onClick={closeModal} to={`/postShow/${postId}`}>Go To Post</Link>
                    <label className='options' onClick={closeModal}>Cancel</label>
                </div>
            break;
        case 'profileShowModal':
            component = 
                <div className='postShowModal' onClick={e => e.stopPropagation()}>
                    <PostShow/>
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
        currentUser: state.entities.users[state.session.id],
        modal: state.ui.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),

        fetchPosts: () => dispatch(fetchPosts()),

        deletePost: (postId) => dispatch(deletePost(postId)),

        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (follow) => dispatch(deleteFollow(follow)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
