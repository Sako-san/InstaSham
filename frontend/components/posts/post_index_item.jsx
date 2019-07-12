import React from 'react';
import { Link } from 'react-router-dom';
import { dateUtil } from '../../util/date_post_util';

const PostIndexItem = ({ post, deletePost, user, createLike, deleteLike, createComment, deleteComment}) => { 

    const deleteButton = (post, user) => {
        if (post.author.id === user.id){
         return (< button className = "card-prop-delete" onClick = {() => deletePost(post.id) }> Delete</button >)
        }
    }

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

    const update = (field) => {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        createComment({
            comment_body: this.state.comment_body,
            comment_id: user.id,
            post_id: post.id
        });

        this.setState({
            comment_body: ''
        });

        const form = document.getElementById(`comment-${post.id}`);
        form.reset();
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
                <div className='dots'>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <br/>
            <div className= "card-img">
                <img className='post-image' src={post.photoUrl} />
            </div>
            <div className="card-prop-icons">
                <div className='left-box'>
                    <div className='icon1'>
                        <i className="far fa-heart" onClick={ () => likeButton(post) }></i>
                    </div>
                    <div className='icon2'>
                    <i className="far fa-comment"></i>
                    </div>
                    <div className='icon3'>
                    <i className="fas fa-arrow-up"></i>
                    </div>
                </div>
                <div className='right-box'>
                    <div className='icon4'>
                        <i className="far fa-bookmark "></i>
                    </div>
                </div>
            </div>
            <span className='likes'>likes</span>
            <span className='count'>{post.like_ids.length}</span>
            <br/>
            <div className='user-body'>
                <span className='username-body'>
                    {post.username}
                </span>
                <span className="card-prop">
                    {post.body}
                </span>
            </div>
            <div className='comment-listing'>
                <ul>

                </ul>
            </div>
            <br/>
            <span className="card-prop-timestamp">
                {dateUtil(post.created_at)}
            </span>
            <br/>

            <section className="comment-form-section">
                <form onSubmit={handleSubmit} id={`comment-form-${post.id}`} className='post-comment'>
                    <input onChange={update('comment_body')} id={`comment-${post.id}`} placeholder="Add a comment..." />
                    <button className="submit-comment" onClick={handleSubmit}>Post</button>
                </form>
            </section>
            {deleteButton(post, user)}
        </li>);
};

export default PostIndexItem;