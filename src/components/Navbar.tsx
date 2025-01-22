import './Navbar.css'
import navImage from '../assets/navLogo.png'
import { IoMdHome } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { BiSolidDetail } from "react-icons/bi";
import { HiPhoto } from "react-icons/hi2";
import { MdMessage } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { BiSolidOffer } from "react-icons/bi";

type LinkData = {
    path: string;
    icon: IconType;
    label: string;
};

const Navbar = () => {
    const [width, setWidth] = useState(0);
    const location = useLocation();
    const [selectedPath, setSelectedPath] = useState(location.pathname);

    useEffect(() => {
        const handleResize = () => {
            const innerWidth = window.innerWidth;
            setWidth(innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setSelectedPath(location.pathname);
    }, [location]);

    const navLinks: LinkData[] = [
        { path: '/', label: 'Home', icon: IoMdHome },
        { path: '/offers', label: 'Offers', icon: BiSolidOffer },
        { path: '/about', label: 'About', icon: BiSolidDetail },
        { path: '/gallery', label: 'Gallery', icon: HiPhoto },
        { path: '/location', label: 'Location', icon: GrMapLocation },
        { path: '/contact', label: 'Contact', icon: MdMessage }
    ];

    const getIconColor = (path: any) => (selectedPath === path ? 'orange' : 'aliceblue');

    return (
        <div className='navbar-root'>
            <div className='nav-logo'>
                <img src={navImage} alt="No image" />
            </div>
            <div className={width > 1100 ? 'nav-center' : 'navbar-float-mobile'}>
                {width > 1100 ? (
                    <ul>
                        {navLinks.map(link => (
                            <Link to={link.path} className='nav-buttons' key={link.path}>
                                <li style={{ color: getIconColor(link.path) }} onClick={() => setSelectedPath(link.path)}>
                                    {link.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <ul>
                        {navLinks.map(link => (
                            <Link to={link.path} className='nav-buttons' key={link.path}>
                                <li className='navbar-list-elements-m' onClick={() => setSelectedPath(link.path)}>
                                    <link.icon color={getIconColor(link.path)} size={35} />
                                    <p style={{ color: getIconColor(link.path) }}>{link.label}</p>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
            {width > 1100 ? <button style={{ visibility: 'hidden' }}>Login</button> : ''}
        </div>
    )
}

export default Navbar
