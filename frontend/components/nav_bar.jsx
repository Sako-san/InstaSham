import React from 'react';
import { connect } from 'react-redux';
import { Link } from  'react-router-dom';
import Modal from '../components/modals/modal';
import { openModal } from '../actions/modal_actions';



class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.createPost = this.createPost.bind(this);
    }

    createPost() {
        const { openModal } = this.props;
        
        openModal('createPost', null);
    }

    render () {
        const {currentUser} = this.props
       
        return (
            <>
            <nav className="nav">
                <div className='insta-cam' >
                    <Link className='nav-bar-cam' to='' ><i className="fab fa-instagram"></i></Link>
                    <Link className='nav-bar-sham' to=''><span>Instasham</span></Link>
                </div>
                <div>
                    <i id='createPost' className="fas fa-camera" onClick={this.createPost}></i>
                    <Link className='profile-link-icon' to={`/users/${currentUser.id}`} ><i className="far fa-user"></i></Link>
                </div>
            </nav>

            <Modal/>
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: Object.values(state.entities.users)
    };
};

const mapDispatchToProps = dispatch => {
    return {
    openModal: (type, options) => dispatch(openModal(type, options))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);