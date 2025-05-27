import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'BLOGS', path: 'blogs' },
        { label: 'INSPIRATIONS', path: 'inspirations' },
        { label: 'CREATE BLOG', path: 'createblog' },
    ]

    return (
        <nav className="fixed z-10 bg-transparent backdrop-blur py-4 w-full mx-auto shadow-sm">
            <div className='container max-md:w-full flex justify-between items-baseline '>
                <img src="./setgetlogo.png" alt="Logo" className="h-6 self-center-safe" />
                <ul onClick={() => setIsOpen(false)}
                    className={`${isOpen ? 'flex' : 'hidden'} lg:gap-12 flex-col max-lg:bg-gray-400 max-lg:absolute max-lg:w-full max-lg:top-0 max-lg:left-0 justify-center items-center focus lg:flex lg:flex-row text-violet-800 xl:bg-transparent`}>
                    {navItems.map((item) => (
                        <li className="hover:text-white lg:hover:text-violet-600 max-lg:py-8 max-lg:hover:bg-violet-600 max-lg:w-full transition-colors duration-200 max-lg:pl-16">
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}

                </ul>
                <div className='flex gap-2 items-center'>
                    <Link to="contact" className="inline-flex items-center justify-center rounded-full border border-violet-600 px-2 py-0.5 hover:bg-violet-600 hover:text-zinc-50 transition-colors duration-200">CONTACT</Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden ml-4 text-2xl cursor-pointer text-violet-800 hover:text-violet-600 z-10" >
                        <FontAwesomeIcon icon={isOpen ? faX : faBars} />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
