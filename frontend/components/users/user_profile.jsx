import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileItem from './user_profile_item';
import NavBar from '../nav_bar';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.postCount = this.postCount.bind(this);
        this.userDash = this.userDash.bind(this);
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

    postCount( posts, user) {
       return posts.filter( post => post.author.id === user.id).length
    }

    userDash(currentUser, user) {
        if (currentUser.id === user.id) {
            return (
                <div className='profile-interaction-block'>
                    <span className='username'>{user.username}</span>
                    <Link className='edit-prof-link' to='/accounts/edit' ><button className='edit-prof'>Edit Profile</button></Link>
                    <button className='settings'>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='profile-interaction-block'>
                    <span className='username'>{user.username}</span>
                    <button className='settings'>Follow/Unfollow</button>
                </div>
            );
        };
    };

    render() {

        const {
            currentUser,
            posts,
            user,
            comments
        } = this.props;

        if (!posts || !user) {
            return <div>Loading...</div>
        }

        const userItems = posts.map( post => {
            if (post.author.id === user.id){
                return ( <UserProfileItem
                    key= {post.id}
                    post= {post}
                    user= {user}
                    comments= {comments}
                />)
            };
        });

        return(
        <>
        <NavBar/>
        <main className='main-prof'>
        <section className='user-info-section'>
        <div className='user-profpic'>
            <img src={user.photoUrl} alt=""/>
        </div>
        <div className='user-profile-block'>
            <div>{this.userDash(currentUser, user)}</div>
            <div className='stats-block'>
                <div>
                    <span className='post-count'>{this.postCount(posts, user)}</span>
                    <span> posts </span>
                </div>
                
                <span> followers </span>
                <span> following </span>
            </div>
            <div className='bio-block'>
                <span className='user-name'>{user.name}</span>
                <p>bio area for all that jazzy info</p>
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