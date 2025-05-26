import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Blogs from './Blogs';
import Services from './Services';

function Hero() {
    return (
        <div className='flex-grow w-full'>
            <div className="h-screen flex flex-col items-center justify-center px-4 w-full flex-grow">

                <h1 className="text-6xl md:text-8xl font-bold text-center px-4 bg-gradient-to-r from-violet-900 to-blue-600 text-transparent bg-clip-text 
    transform transition-all duration-300 mb-12 mt-[-20px]">
                    Develope and Explore!
                </h1>

                <div className="relative flex rounded-full border border-violet-200 overflow-hidden focus-within:border-violet-400 transition-colors duration-200">
                    <input
                        className="py-2 px-4 bg-transparent outline-none focus:ring-0"
                        type="text"
                        placeholder="Search blog..."
                    />
                    <button className="bg-violet-800 w-10 h-10 rounded-full text-gray-50 hover:bg-violet-600 transition-colors absolute right-0">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
            <Blogs />
            <Services />
        </div>
    )
}

export default Hero
