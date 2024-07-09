import React, { useState } from 'react';
import { FaReact, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './styles.scss';

const data = [
    {
        label: "Home",
        to: '/'
    },
    {
        label: "About Me",
        to: '/about'
    },
    {
        label: "Skills",
        to: '/skills'
    },
    {
        label: "Resume",
        to: '/resume'
    },
    {
        label: "Portfolio",
        to: '/portfolio'
    },
    {
        label: "Contact",
        to: '/contact'
    },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const handleToggle = () => {
        setToggleIcon(!toggleIcon);
    };

    const handleCloseMenu = () => {
        setToggleIcon(false);
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__logo'>
                        <FaReact size={30} /></Link>
                    <div className='nav-icon' onClick={handleToggle}>
                        {
                            toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                        }
                    </div>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`} >
                    {data.map((item) => (
                        <li key={item.to} className='navbar__container__menu_item'>
                            <Link
                                className='navbar__container__menu_item__links'
                                to={item.to}
                                onClick={handleCloseMenu}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
