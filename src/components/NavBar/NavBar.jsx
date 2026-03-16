import { Menu, X } from 'lucide-react';
import Link from './Link';
import React from 'react';
import { useState } from 'react';


const navigationData = [
    {
        id: 1,
        name: 'Dashboard',
        path: '/dashboard'
    },
    {
        id: 2,
        name: 'User Profile',
        path: '/profile'
    },
    {
        id: 3,
        name: 'Settings',
        path: '/settings'
    },
    {
        id: 4,
        name: 'Analytics',
        path: '/analytics'
    },
    {
        id: 5,
        name: 'Help Center',
        path: '/help'
    }
];


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>);


    return (
        <nav className='flex justify-between items-center m-6'>

            <span className='flex gap-4' onClick={() => setOpen(!open)}>
                {open ?
                    <X className='md:hidden'></X> :
                    <Menu className='md:hidden'></Menu>
                }

                <ul className={`md:hidden absolute duration-1000 ${open ? 'top-15' : '-top-40'} bg-gray-200 text-black`}>
                    {links}
                </ul>

                <h2 className='text-xl'>My Navbar</h2>
            </span>

            {/* <ul className='flex gap-10'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul> */}

            {/* same work but dynamic way */}
            <ul className='hidden md:flex'>
                {
                    links
                }
            </ul>


            <button className='btn'>Sing In</button>
        </nav>
    );
};

export default NavBar;