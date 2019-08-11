import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { dateUtil } from '../../util/date_post_util';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/post_actions';
import CreateComment from './create_comment';
import PostCommentIndex from './post_comment_index';
import UserInfo from '../users/user_info';
import Modal from '../modals/modal';


class PostIndexItem extends React.Component {
    constructor(props){
        super(props)

    };  

    componentDidMount() {
        this.props.fetchUser(this.props.post.authorId);
    };



    render(){
    
    
    const { post, postId, currentUser, author} = this.props;
    const { createComment, deleteComment, createLike, deleteLike, openModal, closeModal, deletePost} = this.props

    console.log(currentUser)
    
    if (!post || !author){
        return (
            <div>Loading...</div>
        )
    }

    const currentUserPostModal = () => {
        openModal('currentUserPostModal', postId);
        <Modal />
    }

    const postModal = () => {
        openModal('postModal', postId);
        <Modal />
    };

    const modal = () => {
        if (post.authorId === currentUser.id){
            currentUserPostModal();
        } else {
            postModal();
        }
    };

    const likeButton = (post) => {
        console.log(currentUser, 'like')
            if (post.like_ids.includes(currentUser.id)) {
                deleteLike({
                    post_id: post.id,
                    like_id: currentUser.id
                });
            };
        };

    const unlikeButton = (post) => {
        console.log(currentUser, 'unlike')
            if (!post.like_ids.includes(currentUser.id)) {
                createLike({
                    post_id: post.id,
                    like_id: currentUser.id
                });
            };
        };


    const liking = (post) => {
        if (post.like_ids.includes(currentUser.id)) {
            return (<i id='like-post' className="fas fa-heart" onClick={() => likeButton(post)}></i>)
        } else {
            return (<i className="far fa-heart" onClick={() => unlikeButton(post)}></i>)
        }
    }

    const likeCount = (post) => {
        if (post.like_ids.length > 0) {
            return (
            <>
                <span className='like-count'>{post.like_ids.length}</span>
                <span className='like'>likes</span>
            </>
            )
        };
    };
    // debugger;
    return (
        <li className="post-card">
            <div className='user-info-card'>
                <Link to={`/users/${post.authorId}`}>
                    <UserInfo
                    user={author}/>
                </Link>
               
                <div className='names-card'>
                    <Link className='user-profile-link' to={`/users/${post.authorId}`}>
                        <span>
                            {author.username}
                        </span>
                    </Link>
                    <span className='location'>
                        {post.location}
                    </span>
                </div>
                <div className='dots'>
                    <i className="fas fa-ellipsis-h" onClick={ () => modal()}></i>
                </div>
            </div>
            <br />
            <div className="card-img">
                <img className='post-image' src={post.photoUrl} />
            </div>
            <div className="card-prop-icons">
                <div className='left-box'>
                    <div className='icon1'>
                        {liking(post)}
                    </div>
                    <div className='icon2'>
                        <Link className='link' to={`/postShow/${postId}`}><i className="far fa-comment"></i></Link>
                    </div>
                </div>
                <div className='right-box'>
                    {/* <div className='icon4'>
                        <i className="far fa-bookmark "></i>
                    </div> */}
                </div>
            </div>
            <div className='likes'>
                {likeCount(post)}
            </div>
            <br />
            <div className='user-body'>
                <span className='username-body'>
                    {author.username}
                </span>
                <span className="card-prop">
                    {post.body}
                </span>
            </div>
            <br />
            <PostCommentIndex
                post_id={postId}
                user_id={currentUser.id} 
                />
            <br />
            <span className="card-prop-timestamp">
                {dateUtil(post.created_at)}
            </span>
            <br />
            <CreateComment
                key={post.id}
                post_id={postId}
                user_id={currentUser.id}
            />
            
        </li>
        );  
    };
};

const mapStateToProps = (state, ownProps) => {

    const post = state.entities.posts[ownProps.postId];

    return {
        currentUser: state.session.id,
        author: state.entities.users[post.authorId],
        post
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),

        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),

        createComment: (comment) => dispatch(createComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),

        openModal: (type, options) => dispatch(openModal(type, options)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);