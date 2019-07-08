import React from 'react';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
         
        console.log(this.props.currentUser)
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {

        const user = this.props.currentUser;

        return(
        <>
        <main className='main-prof'>
        <section className='user-info-section'>
        <div className='user-profpic'>
            IMAGE GOES HERE
        </div>
        <div className='user-profile-block'>
            <div className='profile-interaction-block'>
                <span>{user.username}</span>
                <button className='edit-prof'>Edit Profile</button>
                <button className='settings'></button>
            </div>
            <div className='stats-block'>
                <span> posts </span>
                <span> followers </span>
                <span> following </span>
            </div>
            <div className='bio-block'>
                <span>{user.name}</span>
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