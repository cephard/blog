import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Blogs from './Blogs';
import Inspirations from './Inspirations';
import Contact from './Contact';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Hero() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [title, setTitle] = useState("");
    const [foundBlogs, setFoundBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/blogposts/${title}`)
            .then(foundBlogs => setFoundBlogs(foundBlogs.data));
    }, [title])

    return (
        <div className='w-full flex flex-col space-y-9'>
            <div className="h-[80vh] flex flex-col space-y-8 items-center justify-center text-center p-8 w-full flex-grow">
                <h1 className="text-6xl md:text-8xl font-bold px-4 bg-gradient-to-r from-violet-900 to-blue-600 text-transparent bg-clip-text 
    transform transition-all duration-300">
                    Develope and Explore!
                </h1>
                <p className='font-light px-4'>Be inspired by the words of a developer that never quits trying.</p>
                <div className="relative flex rounded-full border border-violet-200 overflow-hidden focus-within:border-violet-400 transition-colors duration-200">
                    <input
                        className="py-2 px-4 bg-transparent outline-none focus:ring-0"
                        type="text"
                        placeholder="Search blog..."
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                    <button className="bg-violet-800 w-10 h-10 rounded-full text-gray-50 hover:bg-violet-600 transition-colors absolute right-0"
                        onClick={() => {
                            axios.get(`${baseUrl}/blogposts/${title}`)
                                .then(foundBlogs => setFoundBlogs(foundBlogs.data));
                        }}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div >
            </div>
            <Blogs foundBlogs={foundBlogs} />
            <Inspirations />
            <Contact />
        </div>
    )
}

export default Hero
