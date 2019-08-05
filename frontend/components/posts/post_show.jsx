import React from 'react';
import { connect } from 'react-redux';
import { dateUtil } from '../../util/date_post_util';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchPost,  deletePost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, fetchComments, deleteComment } from '../../actions/comment_actions';
import CreateCommentContainer from './create_comment';
import PostCommentIndex from './post_comment_index';
import NavBar from '../nav_bar';

class PostShow extends React.Component {
    constructor(props){
        super(props)

        this.likeButton = this.likeButton.bind(this);
        this.unlikeButton = this.unlikeButton.bind(this);
    }

    componentDidMount() {
       this.props.fetchPost(this.props.match.params.id);
       this.props.fetchComments();
    }

    likeButton() {
        const {
            deleteLike,
            currentUser,
            post
        } = this.props;

        if (post.like_ids.includes(currentUser)) {
            deleteLike({
                post_id: post.id,
                like_id: currentUser
            });
        }
    };

    unlikeButton() {
        const {
            createLike,
            currentUser,
            post
        } = this.props;

        if (!post.like_ids.includes(currentUser)) {
            createLike({
                post_id: post.id,
                like_id: currentUser
            });
        };
    };

    render() {
        const {post, comments, currentUser, users} = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        let liking = (post) => {
            if (post.like_ids.includes(currentUser)) {
                return (<i id='like-post' className="fas fa-heart" onClick={this.likeButton}></i>)
            } else {
                return (<i className="far fa-heart" onClick={this.unlikeButton}></i>)
            }
        }

        let likeCount = (post) => {
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
            <>
            <NavBar/>
            <div className='post-show-card' >
                <img className='card-image' src={post.photoUrl} alt='Post Show Image'/>
                <section className='post-sidebar'>
                    <div className='poster'>
                            <img height='32px' width='32px' className='prof-pic' src={users[post.authorId].photoUrl} />
                            <div className='poster-info'>
                                <span>{users[post.authorId].username}</span>
                                <span className='location'>{post.location}</span>
                            </div>
                    </div>

                    <section className='side-bar-section'>
                        <div className='poster-discussion'>
                                <img height='32px' width='32px' className='prof-pic' src={users[post.authorId].photoUrl}/>
                            <span className='user'>{post.username}</span>
                            <span className='post-body'>{post.body}</span>
                        </div>
                        <ul className='comment-listings'>
                            <PostCommentIndex
                            post_id={post.id}
                            user_id={this.props.currentUser}/>
                        </ul>
                        <section className='lower-postcard'>
                        <div className="postshow-card-props">
                                <div className='left-box'>
                                    <div className='show-icon1'>
                                        {liking(post)}
                                    </div>
                                    <div className='show-icon2'>
                                        <i className="far fa-comment"></i>
                                    </div>
                                </div>
                        </div>
                        <div className='likes'>
                            {likeCount(post)}
                        </div>
                        <span className="show-card-prop-timestamp">
                            {dateUtil(post.created_at)}
                        </span>
                        </section>
                    </section>

                    <div className='user-interactions2'>
                        < CreateCommentContainer 
                            post_id={post.id}
                            user_id={this.props.currentUser}/>
                    </div>
                </section>
            </div>
            </>
        )
    };
};


const mapStateToProps = (state, ownProps) => {

    return { 
        currentUser: state.session.id,
        users: state.entities.users,
        post: state.entities.posts[ownProps.match.params.id]
    };
   
   
};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPost: (id) => dispatch(fetchPost(id)),
    deletePost: (id) => dispatch(deletePost(id)),

    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),

    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)