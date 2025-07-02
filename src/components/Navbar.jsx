import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'BLOGS', path: 'blogs' },
        { label: 'INSPIRATIONS', path: 'inspirations' },
        { label: 'CREATE BLOG', path: 'createblog' },
        { label: 'DASHBOARD', path: 'dashboard' },
    ]

    return (
        <nav className="fixed z-50 bg-transparent backdrop-blur py-4 w-full mx-auto shadow-sm">
            <div className='container max-md:w-full flex items-center justify-between'>
                <Link to="/" className='flex text-xl sm:text-2xl font-bold'>
                    {/**
                     * <img src="./setgetlogo.png" alt="Logo" className="h-6 self-center-safe" />
                     */}
                    <h1 className=''>Bonga</h1><h1 className='text-blue-600'>bits.</h1>
                </Link>
                <ul onClick={() => setIsOpen(false)}
                    className={`${isOpen ? 'flex max-lg:h-screen max-lg:bg-white max-lg:shadow-sm max-lg:absolute max-lg:w-full max-lg:top-0 max-lg:left-0' : 'hidden'} lg:gap-12 flex-col  justify-center items-center focus lg:flex lg:flex-row text-violet-800 xl:bg-transparent`}>
                    {navItems.map((item) => (
                        <Link to={item.path} key={item.label}
                            className="hover:text-white lg:hover:text-violet-600 max-lg:py-8 max-lg:hover:bg-violet-600 max-lg:w-full transition-all duration-300 max-lg:px-16">
                            {item.label}
                            {<hr className='lg:hidden' />}
                        </Link>
                    ))}
                    <Link to="contact" className="inline-flex items-center justify-center rounded-full border border-violet-600 px-2 py-0.5 hover:bg-violet-600 hover:text-zinc-50 transition-colors duration-200">CONTACT</Link>
                </ul>
                <div className='flex gap-2 items-center'>
                    <Link to={'/signin'}>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ml-4 text-xl cursor-pointer text-violet-800 hover:text-violet-600 z-10" >
                        <FontAwesomeIcon icon={isOpen ? faX : faBars} />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
