import React from 'react';
import { connect } from 'react-redux';
import { fetchPost,  deletePost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, fetchComments, deleteComment } from '../../actions/comment_actions';
import CreateCommentContainer from './create_comment';
import PostCommentIndex from './post_comment_index';

class PostShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
       this.props.fetchPost(this.props.match.params.id);
       this.props.fetchComments();
    }

    

    render() {
        const {post, comments} = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        const likeButton = (post) => {
            if (post.like_ids.includes(this.props.currentUser)) {
                deleteLike({
                    post_id: post.id,
                    like_id: this.props.currentUser
                });
            };
        };

        const unlikeButton = (post) => {
            if (!post.like_ids.includes(this.props.currentUser)) {
                createLike({
                    post_id: post.id,
                    like_id: this.props.currentUser
                });
            };
        };

        const liking = (post) => {
            if (post.like_ids.includes(this.props.currentUser)) {
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
            <>
            <nav className="nav">
                <div className='insta-cam' >
                    <i className="fab fa-instagram"></i>
                </div>
                <span> Instasham</span>
            </nav>

            <div className='post-show-card' >
                <img className='card-image' src={post.photoUrl} alt='Post Show Image'/>
                <section className='post-sidebar'>
                    <div className='poster'>
                            <img height='32px' width='32px' className='prof-pic' src={window.currentUserProf} />
                            <div className='poster-info'>
                                <span>{post.username}</span>
                                <span className='location'>{post.location}</span>
                            </div>
                    </div>

                    <section className='side-bar-section'>
                        <div className='poster-discussion'>
                            <img height='32px' width='32px' className='prof-pic' src={window.currentUserProf}/>
                            <span className='user'>{post.username}</span>
                            <span className='post-body'>{post.body}</span>
                        </div>
                        <ul className='comment-listings'>
                            <img height='32px' width='32px' className='prof-pic' src={window.currentUserProf} />
                            <PostCommentIndex
                            post_id={post.id}
                            user_id={this.props.currentUser}/>
                        </ul>
                        <div className="postshow-card-props">
                            <div className="card-prop-icons">
                                <div className='left-box'>
                                    <div className='icon1'>
                                        {liking(post)}
                                    </div>
                                    {/* <div className='icon2'>
                                        
                                    </div> */}
                                </div>
                                <div className='right-box'>
                                    <div className='icon4'>
                                        <i className="far fa-bookmark "></i>
                                    </div>
                                </div>
                            </div>
                            <div className='likes'>
                                {likeCount(post)}
                            </div>
                        </div>
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
        post: state.entities.posts[ownProps.match.params.id]
    };
   
   
};

const mapDispatchToProps = dispatch => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
    deletePost: (id) => dispatch(deletePost(id)),

    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),

    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)