import React from 'react';
import { Link } from 'react-router-dom';
import { dateUtil } from '../../util/date_post_util';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateComment from './create_comment';
import PostCommentIndex from './post_comment_index';
import UserInfo from '../users/user_info';
import Modal from '../modals/modal';;

const PostIndexItem = ({ openModal, currentUser, post, deletePost, users, createLike, deleteLike, author, postId }) => {

   

    if ( !author || !post || !currentUser) {
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
        if (post.authorId === currentUser) {
            currentUserPostModal();
        } else {
            postModal();
        }
    };

    const deleteButton = (post, currentUser) => {
        if (post.authorId === currentUser) {
            return (
                <div className='dots'>
                    <i className="fas fa-ellipsis-h" onClick={() => deletePost(post.id)}></i>
                </div>
            )
        };
    };

    const likeButton = (post) => {
        if (post.like_ids.includes(currentUser)) {
            deleteLike({
                post_id: post.id,
                like_id: currentUser
            });
        };
    };

    const unlikeButton = (post) => {
        if (!post.like_ids.includes(currentUser)) {
            createLike({
                post_id: post.id,
                like_id: currentUser
            });
        };
    };

    const liking = (post) => {
        if (post.like_ids.includes(currentUser)) {
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

    
    return (
        <li className="post-card">
            <div className='user-info-card'>
                <Link to={`/users/${post.authorId}`}>
                    <UserInfo
                        user={author} />
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
                    <i className="fas fa-ellipsis-h" onClick={() => modal()}></i>
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
                        <Link className='link' to={`/postShow/${post.id}`}><i className="far fa-comment"></i></Link>
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
                post_id={post.id}
                user_id={currentUser}
            />
            <br />
            <span className="card-prop-timestamp">
                {dateUtil(post.created_at)}
            </span>
            <br />
            <CreateComment
                key={post.id}
                post_id={post.id}
                user_id={currentUser}
            />

        </li>);


};
export default PostIndexItem;


