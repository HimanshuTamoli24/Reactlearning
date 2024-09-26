import React from 'react';
import { FaHome, FaTools } from "react-icons/fa";
import { PiPhoneDisconnect } from "react-icons/pi";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const list = [
        { name: "Home", path: "/", icon: <FaHome />, label: "Home" },
        { name: "Work", path: "/work", icon: <FaTools />, label: "Work" },
        { name: "Contact", path: "/contact", icon: <PiPhoneDisconnect />, label: "Contact" },
    ];

    return (
        <header className="fixed top-5 w-2/4 p-2 backdrop-blur-sm bg-opacity-95 backdrop-brightness-90 rounded-full shadow-md shadow-black max-h-12 flex items-center">
            <ul className="w-full flex justify-evenly text-center">
                {
                    list.map((item, index) => (
                        <li key={index}>
                            <NavLink 
                                to={item.path} 
                                className="text-white hover:text-blue-500"
                                activeClassName="text-blue-500" // Highlights active link
                                exact // Ensures exact match for "/"
                            >
                                {item.icon}
                                <span className="ml-2">{item.label}</span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </header>
    );
}

export default Navbar;
