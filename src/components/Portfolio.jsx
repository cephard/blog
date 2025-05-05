import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blogs from '../data/blogs.json'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

function Portfolio() {

    const initialBlogs = blogs.slice(0, 3);

    return (
        <div className="grid grid-cols-3 py-7 gap-x-5 gap-y-8 my-8 justify-center">
            {initialBlogs.map(blog => (

                <Link to={`/blogpost/${blog.id}`}>
                    <div key={blog.id} className='card max-w-sm border border-gray-200 rounded overflow-hidden  transition-all duration-300 ease-in-out hover:border-blue-300 hover:shadow-lg'>
                        <img src={blog.image} alt={blog.title} className='w-full' />
                        <div className='px-6 py-4'>
                            <h1 className='font-bold text-2xl mb-4 text-gray-600'>{blog.title}</h1>
                            <p className='text-gray-500'>{blog.description}</p>
                            <div className='pt-6'>
                                {blog.tags.map((tag, index) => (
                                    <span key={index} className="inline-block bg-violet-200 rounded-full px-3 py-1 text-sm font-extralight text-blue-800 mr-2 mb-2 tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            <div><a href="" className='flex flex-col-2 gap-3 items-center align-middle'>More
                <FontAwesomeIcon className='flex' icon={faArrowRight} />
            </a></div>
        </div >




    )
}

export default Portfolio
