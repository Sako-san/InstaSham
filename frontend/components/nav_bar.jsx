import React from 'react';
import { Link } from  'react-router-dom';

class NavBar extends React.Component {

    render () {
        const {currentUser} = this.props
       
        return (
            <nav className="nav">
                <div className='insta-cam' >
                    <Link className='nav-bar-cam' to='' ><i className="fab fa-instagram"></i></Link>
                    <Link className='nav-bar-sham' to=''><span> Instasham</span></Link>
                </div>
                <div>
                    <Link className='profile-link-icon' to={`/users/${currentUser}`} ><i className="far fa-user"></i></Link>
                </div>
            </nav>
        );
    };
};



export default NavBar