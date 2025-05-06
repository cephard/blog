import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

function Navbar() {
    return (
        <nav className="bg-transparent backdrop-blur fixed py-6 w-full mx-auto">
            <div className='container flex justify-between items-baseline '>
                <img src="/set_get_logo.png" alt="Logo" className="h-8" />

                <ul className="flex space-x-20 text-violet-800 font-semibold text-lg items-center">
                    <li className="hover:text-violet-400 transition-colors duration-200">
                        <Link to="/blog/">HOME</Link>
                    </li>
                    <li className="hover:text-violet-400 transition-colors duration-200">
                        <Link to="/blog/about">ABOUT</Link>

                    </li>
                    <li className="hover:text-violet-400 transition-colors duration-200">
                        <Link to="/blog/services">SERVICES</Link>

                    </li>
                    <li className="hover:text-violet-400 transition-colors duration-200">
                        <Link to="/blog/blogpost">BLOGS</Link>
                    </li>
                    <li>
                        <a href="#">
                            <span className="inline-flex items-center justify-center rounded-3xl border border-violet-600 px-4 py-1 hover:bg-violet-600 hover:text-zinc-50 transition-colors duration-200">
                                <Link to="/blog/contact">CONTACT</Link>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}




export default Navbar;
