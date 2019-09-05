import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileItem from './user_profile_item';
import NavBar from '../nav_bar';
import { openModal } from '../../actions/modal_actions';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.postCount = this.postCount.bind(this);
        this.userDash = this.userDash.bind(this);
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);

    };

    componentDidMount() {

        const {
            fetchComments,
            fetchPosts,
            fetchUser
        } = this.props;
        
        fetchPosts();
        fetchComments();
        
        if (this.props.match.params.userId) {
            fetchUser(this.props.match.params.userId);
        };

    };

    componentDidUpdate(prevProps) {

        const {
            fetchUser
        } = this.props;

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            fetchUser(this.props.match.params.userId);
        };

    };

    follow(e) {
        const { createFollow, user, currentUser } = this.props;
        
        createFollow({
            following_id: user.id,
            follower_id: currentUser.id
        });
    };

    unfollow(e) {
        const { deleteFollow, user, currentUser} = this.props;

        deleteFollow({
            following_id: user.id,
            follower_id: currentUser.id
        });
    };

    postCount( posts, user) {
       return posts.filter( post => post.authorId === user.id).length
    };

    userDash(currentUser, user) {
        if (currentUser.id === user.id) {
            return (
                <div className='profile-interaction-block'>
                    <span className='username'>{user.username}</span>
                    <Link className='edit-prof-link' to='/accounts/edit' ><button className='edit-prof'>Edit Profile</button></Link>
                    {/* <button className='settings'>Logout</button> */}
                </div>
            );
        } else if ( user.followerIds.includes(currentUser.id) ) {
            return (
                <div className='profile-interaction-block'>
                    <span className='username'>{user.username}</span>
                    <button className='settings' onClick={ e => this.unfollow(e) }>Unfollow</button>
                </div>
            );
        } else {
            return (
                <div className='profile-interaction-block'>
                    <span className='username'>{user.username}</span>
                    <button className='settings' onClick={ e => this.follow(e) }>Follow</button>
                </div>
            );
        };
    };

    render() {

        const {
            currentUser,
            posts,
            user,
            comments,
            openModal
        } = this.props;

        if (!posts || !user) {
            return <div>Loading...</div>
        }

        const userItems = posts.map( post => {
            if (post.authorId === user.id){
                return ( <UserProfileItem
                    key= {post.id}
                    post= {post}
                    user= {user}
                    comments= {comments}
                    openModal= {openModal}
                />)
            };
        });
        
        
        return(
        <>
        <NavBar
            currentUser={currentUser.id}
        />
        <main className='main-prof'>
        <section className='user-info-section'>
        <div className='user-profpic'>
            <img src={user.photoUrl} alt="user profile picture"/>
        </div>
        <div className='user-profile-block'>
            <div>{this.userDash(currentUser, user)}</div>
            <div className='stats-block'>
                <div>
                    <span className='post-count'>{this.postCount(posts, user)}</span>
                    <span> posts </span>
                </div>
                <div>
                    <span className='follower-count'>{user.followerIds.length}</span>
                    <span> followers </span>
                </div>
                <div>
                    <span className='following-count'>{user.followingIds.length}</span>
                    <span> following </span>
                </div>
                
            </div>
            <div className='bio-block'>
                <span className='user-name'>{user.name}</span>
                <p>{user.bio}</p>
            </div>
        </div> 
        </section>
        <section className='user-post-index'>
                <ul className="user-posts">
                   {userItems} 
                </ul>
        </section>
        </main>
        </>
        );
    };
}

export default ProfilePage;