import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions'
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar';

class EditUserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.currentUser;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('currentUser[name]', this.state.name);
        formData.append('currentUser[username]', this.state.username);
        formData.append('currentUser[bio]', this.state.bio);
        formData.append('currentUser[email]', this.state.email);

        this.props.updateUser(formData);
        this.setState({ name: '', username: '', bio: '', email: ''})
    };

    render() {

        const {currentUser} = this.props;

        return(
        <>
            <NavBar/>
            <section className='edit-section'>
                <form className='edit-form' onSubmit={this.handleSubmit}> 
                    <div className='prof-pic-block'>
                        <img className='edit-pic' src={currentUser.photoUrl} alt="user-pic" />
                        <div className='name-box'>
                            <span>{currentUser.username}</span>
                            <span><link rel="stylesheet" href="" />Change Profile Photo</span>
                        </div>
                    </div>

                    <div className='edits'>
                        <label>Name</label>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={this.update('name')}
                        />
   
                        <label>Username</label>
                        <input 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.update('username')}
                        />
        
                        <label>Bio</label>
                        <input 
                            type="text" 
                            value={this.state.bio} 
                            onChange={this.update('bio')}
                        />
             
                        <label>Email</label>
                        <input 
                            type="text" 
                            value={this.state.email} 
                            onChange={this.update('email')}
                        />

                        <input type="submit" className='submit' value='Submit'/>
                    </div>
                </form>
            </section>
        </> 
        )};
};

const mapStateToProps = ( state ) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchuser(userId)),

    updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile);