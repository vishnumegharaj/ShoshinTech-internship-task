import './mainmenu.css'
import { MdDashboard } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

function Mainmenu({isMenuVisible}) {
    return (
        <div className={`container ${isMenuVisible ? 'open' : 'hidden'}`}>
            <div className='heading'>
                <img src={require('./logo.png')} alt="logo" className='logo' />
                <h2 className='tab-hide' >Vasitum</h2>
            </div>

            {/* main menu */}
            <div className='mainmenu-container'>
                <p className='font-small'>MAIN MENU</p>

                <div className='mainmenu-child flex'>
                    <MdDashboard  className='menu-icon'/>
                    <p className='tab-hide'>Dashboard </p>
                </div>

                <div className='mainmenu-child flex'>
                    <FaUserPlus  className='menu-icon'/>
                    <p className='tab-hide'> Recruitment</p>
                </div>

                <div className='mainmenu-child flex'>
                    <BiSolidCalendarEvent />
                    <p className='tab-hide'>Schedule </p>
                </div>

                <div className='mainmenu-child flex'>
                    <FaUsers  className='menu-icon'/>

                    <p className='tab-hide'> Employee </p>
                </div>

                <div className='mainmenu-child flex'>
                    <HiBuildingOffice2  className='menu-icon'/>
                    <p className='tab-hide'> Department</p>
                </div>

            </div>

            <div className='other'>
                <p className='font-small'>Other</p>
                <div className='mainmenu-child flex'>
                    <BiSupport  className='menu-icon'/>
                    <p className='tab-hide'> Support </p>
                </div>

                <div className='mainmenu-child flex'>
                    <IoMdSettings  className='menu-icon'/>

                    <p className='tab-hide'> Settings</p>
                </div>
                
            </div>
        </div>
    );
}

export default Mainmenu;
