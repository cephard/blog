import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blogs from '../data/blogs.json'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

function Blogs() {
    return (
        <>
            <div className="w-full">
                <h1 className="blog-heading">Blogs</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-x-5 gap-y-8 justify-center">
                {blogs.map(blog => (
                    <Link to={`/blogpost/${blog.id}`}>
                        <div key={blog.id} className='card border border-gray-300 shadow-gray-300 shadow-md rounded-lg overflow-hidden h-full  transition-all duration-300 ease-in-out hover:border-blue-300 hover:shadow-md hover:shadow-blue-300'>
                            <img src={`./${blog.image}`} alt={blog.title} className='w-full' />
                            <div className='px-6 py-4'>
                                <h1 className='font-bold text-xl mb-4 text-gray-600'>{blog.title}</h1>
                                <p className='text-gray-500'>{blog.description}</p>
                                <div className='pt-6'>
                                    {blog.tags.map((tag, index) => (
                                        <span key={index} className="inline-block bg-violet-200 rounded-full px-3 py-1 text-xs font-extralight text-blue-800 mr-2 mb-2 tracking-wider">
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
        </>
    )
}

export default Blogs
