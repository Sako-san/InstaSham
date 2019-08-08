import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserProfileItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {show: false};
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    showModal() {
        this.setState({ show: true });
    };

    closeModal() {
        this.setState({ show: false });
    };

    commentCount() { 
        const {comments, post} = this.props;

        comments.filter(comment => comment.post_id === post.id).length 
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