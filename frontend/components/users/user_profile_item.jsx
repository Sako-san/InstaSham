import React from 'react';
import { Link } from 'react-router-dom';

class UserProfileItem extends React.Component {
    constructor(props) {
        super(props);

    };

    render(){

    const { post, comments, users } = this.props;

    const likeCount = post.like_ids.length;
    const commentCount = comments.filter(comment => comment.post_id === post.id).length;

    return (
        <li >
            <div className='post-element'>
                <img className='profile-posts' src={post.photoUrl} alt=""  />
                <div className='div-box'>
                    <Link to={`/postShow/${post.id}`}>
                        <div className='hover-like-button'>
                            <i className="fas fa-heart"></i>
                            <span className='post-likes'>{likeCount}</span>
                        </div>
                    </Link>
                   
                <Link to={`/postShow/${post.id}`}>
                        <div className='hover-comment-button'>
                            <i className="fas fa-comment"></i>
                            <span className='post-comments'>{commentCount}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </li>
        );
};
};

export default UserProfileItem;