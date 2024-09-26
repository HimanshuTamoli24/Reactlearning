import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation(); // Get the current path

    const list = [
        { name: 'Home', path: '/', label: 'Home' },
        { name: 'About', path: '/about', label: 'About' },
        { name: 'Contact', path: '/contact', label: 'Contact' },
    ];

    return (
        <div className='flex justify-center min-w-[40rem] fixed top-5'>
            <div className="bg-slate-950 w-full text-white shadow-sm shadow-slate-900 rounded-md min-h-12 flex items-center justify-around">
                {list.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`px-4 py-2 ${location.pathname === item.path ? 'bg-gray-700' : ''}`}
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
