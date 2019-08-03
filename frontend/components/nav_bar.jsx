import React from 'react';
import { Link } from  'react-router-dom';

class NavBar extends React.Component {

    render () {

        return (
            <nav className="nav">
                <div className='insta-cam' >
                    <Link className='nav-bar-cam' to='' ><i className="fab fa-instagram"></i></Link>
                    <Link className='nav-bar-sham' to=''><span> Instasham</span></Link>
                </div>
                
            </nav>
        );
    };
};



export default NavBar