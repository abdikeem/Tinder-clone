import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <PersonIcon className="header_icon" fontSize="large"/>
            <img className="header_logo" src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="tinder_logo" />
            <ForumIcon className="header_icon" fontSize="large"/>
        </div>
    )
}

export default Header