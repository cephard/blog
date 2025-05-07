import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-transparent backdrop-blur fixed py-6 w-full mx-auto">
            <div className='container max-md:w-full flex justify-between items-baseline '>
                <img src="/set_get_logo.png" alt="Logo" className="h-8" />
                <ul className="hidden xl:flex gap-12 text-violet-800 font-semibold text-lg">
                    <li className="hover:text-violet-400 transition-colors duration-200">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="hover:text-violet-400 transition-colors duration-200">
                        <Link to="about">ABOUT</Link>

                    </li>
                    <li className="hover:text-violet-400 transition-colors duration-200">
                        <Link to="services">SERVICES</Link>

                    </li>
                    <li className="hover:text-violet-400 transition-colors duration-200">
                        <Link to="blogpost">BLOGS</Link>
                    </li>
                </ul>
                <div className='flex gap-2 items-center'>
                    <a href="#">
                        <span className="inline-flex items-center justify-center rounded-3xl border border-violet-600 px-4 py-1 hover:bg-violet-600 hover:text-zinc-50 transition-colors duration-200">
                            <Link to="contact">CONTACT</Link>
                        </span>
                    </a>
                    <button className="xl:hidden ml-4 text-4xl cursor-pointer text-violet-800 hover:text-violet-600" >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </nav>
    );
}




export default Navbar;
