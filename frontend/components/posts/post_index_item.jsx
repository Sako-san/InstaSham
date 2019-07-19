import React from 'react';
import { Link } from 'react-router-dom';
import { dateUtil } from '../../util/date_post_util';
import CreateComment from './create_comment';
import PostCommentIndex from './post_comment_index';

const PostIndexItem = ({ post, deletePost, user, createLike, deleteLike}) => { 

    const deleteButton = (post, user) => {
        if (post.author.id === user.id){
         return (
             <div className='dots'>
                 <i className="fas fa-ellipsis-h" onClick={() => deletePost(post.id)}></i>
             </div>
         )};
    };

    const likeButton = (post) => {
        if (post.like_ids.includes(user.id)) {
            deleteLike({ 
                post_id: post.id,
                like_id: user.id
            });
        } else {
            createLike({
                post_id: post.id,
                like_id: user.id
            })
        };
    };

    return (
        <li className="post-card">
            <div className='user-info-card'>
                <img height='45px' width='45px' className='prof-pic' src="" />
                <div className='names-card'>
                    <span>
                        {post.username}
                    </span>
                    <span className='location'>
                        {post.location}
                    </span>
                </div>
                {deleteButton(post, user)}
            </div>
            <br />
            <div className="card-img">
                <img className='post-image' src={post.photoUrl} />
            </div>
            <div className="card-prop-icons">
                <div className='left-box'>
                    <div className='icon1'>
                        <i className="far fa-heart" onClick={() => likeButton(post)}></i>
                    </div>
                    <div className='icon2'>
                        <i className="far fa-comment"></i>
                    </div>
                </div>
                <div className='right-box'>
                    <div className='icon4'>
                        <i className="far fa-bookmark "></i>
                    </div>
                </div>
            </div>
            <div className='likes'>
                <span className='like-count'>{post.like_ids.length}</span>
                <span className='like'>likes</span>
            </div>
            <br />
            <div className='user-body'>
                <span className='username-body'>
                    {post.username}
                </span>
                <span className="card-prop">
                    {post.body}
                </span>
            </div>
            <br />
            <PostCommentIndex
                post_id={post.id}
                user_id={user.id} 
                />
            <br />
            <span className="card-prop-timestamp">
                {dateUtil(post.created_at)}
            </span>
            <br />
            <CreateComment
                key={post.id}
                post_id={post.id}
                user_id={user.id}
            />
            
        </li>);
    
    
};

export default PostIndexItem;