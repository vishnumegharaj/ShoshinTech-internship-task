import './header.css'
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from 'react';
import Mainmenu from '../mainmenu/mainmenu';

function Header({ toggleMenu }, { isMenuVisible }) {
    const user = useState('Vishnu Megharaj')

    return (
        <div className="header">
            <div className="search-container">
               
                <GiHamburgerMenu className='burgermenu desktop-hide' onClick={toggleMenu} />

                <IoSearch className='search-icon ' />
                <input type="text" className="search-bar mobile-hide" placeholder="Search" />
            </div>
            <div className='icon-wrapper' >
                <IoIosNotifications className='icon' />
                <RiMessage2Fill className='icon' />
                <div className='user'>
                    <img className='user-image' src="https://lh3.googleusercontent.com/a/ACg8ocKiYKgy0-FrbN_kuCanakg7Pjqv_Q-ifvs-bFdV7G7lyrp0oLigKQ=s96-c" alt="" />
                    <p className='tab-hide mobile-hide'>{user}</p>
                    <FaAngleDown />

                </div>
            </div>
        </div>

    )
}

export default Header;