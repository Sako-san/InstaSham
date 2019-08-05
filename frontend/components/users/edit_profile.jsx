import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions'
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar';

class EditUserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.currentUser.name,
            username: this.props.currentUser.username,
            bio: this.props.currentUser.bio,
            email: this.props.currentUser.email,
            photoFile: null,
            photoUrl: this.props.currentUser.photoUrl,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({
                photoFile: file,
                photoUrl: fileReader.result
            });
        };

        if (file) fileReader.readAsDataURL(file);
    }

    handleSubmit(e) {
        e.preventDefault();

        const {currentUser, updateUser} = this.props

        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append("user[prof_pic]", this.state.photoFile);
        }
        formData.append('user[name]', this.state.name);
        formData.append('user[username]', this.state.username);
        formData.append('user[bio]', this.state.bio);
        formData.append('user[email]', this.state.email);

        updateUser({formData, id: currentUser.id});
    };

    render() {

        const {currentUser} = this.props;

        let preview;
        if(this.state.photoUrl) {
            preview = <img className='edit-pic' src={this.state.photoUrl} alt="user-pic" onChange={this.handleFile} />
        } else {
            preview = preview = <img className='edit-pic' src={currentUser.photoUrl} alt="user-pic" onChange={this.handleFile} />
        }

        if (this.state.bio !== null) {
            this.state.bio = this.state.bio;
        } else {
            this.state.bio = '';
        };

        return(
        <>
            <NavBar/>
            <section className='edit-section'>
                <form className='edit-form' onSubmit={this.handleSubmit}> 
                    <div className='prof-pic-block'>
                        {preview}
                        <div className='name-box'>
                            <span>{currentUser.username}</span>
                                <label className='change-pic' onChange={this.handleFile}> Change Profile Photo
                                    <input className='prof-pic-edit' type="file" accept='image/*' />
                                </label>
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
                            type="textarea" 
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

    updateUser: (formData, userId) => dispatch(updateUser(formData, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile);