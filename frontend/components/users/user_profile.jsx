import React from 'react';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        // this.userPosts = this.userPosts.bind(this);
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



    userPosts() {
        const {
            posts,
            user
        } = this.props;

        const userPostData = posts.filter( (post, user) => post.author.id === user);

        return userPostData;
    };

    render() {

        
        const {
            currentUser,
            posts,
            user
        } = this.props;

        if (!user) {
            return <div>Loading...</div>
        }


        return(
        <>
        <main className='main-prof'>
        <section className='user-info-section'>
        <div className='user-profpic'>
            IMAGE GOES HERE
        </div>
        <div className='user-profile-block'>
            <div className='profile-interaction-block'>
                <span className='username'>{user.username}</span>
                <button className='edit-prof'>Edit Profile</button>
                <button className='settings'></button>
            </div>
            <div className='stats-block'>
                <span> posts </span>
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
            <div>USER POSTS</div>
        </section>
        </main>
        </>
        );
    };
}

export default ProfilePage;