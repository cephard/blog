import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSpinner, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import SectionHeading from './SectionHeading';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Blogs({ foundBlogs }) {

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //getting data from mongodb through the asp.net core api using anxios data is received as json

    useEffect(() => {
        if (foundBlogs && foundBlogs.length > 0) {
            setBlogs(foundBlogs);
            setLoading(false);
        } else {
            axios.get(`${baseUrl}/blogposts`)
                .then(result => {
                    setBlogs(result.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [foundBlogs]);

    if (loading) return <>
        <p>Loading...</p>
        <FontAwesomeIcon className='animate-spin' icon={faSpinner} />
    </>;
    if (error) return <div className='text-red-500 text-2xl p-4 flex w-full justify-center'>Error : {error}</div>;

    return (
        <section>
            <SectionHeading heading="Blogs" />
            <div className="grid md:grid-cols-3 gap-x-4 gap-y-8 justify-center">
                {blogs.map(blog => (
                    <Link key={blog.id} to={`/blogpost/${blog.id}`} state={{ blog }}>
                        <div className='relative card border border-gray-300 shadow-gray-300 shadow-md rounded-lg overflow-hidden h-full  transition-all duration-300 ease-in-out hover:border-blue-300 hover:shadow-md hover:shadow-blue-300'>
                            <img src={blog.imageURL} alt={blog.title} className='w-full h-64 object-cover' />
                            <FontAwesomeIcon icon={faHeart}
                                className='absolute right-0 top-0 p-2 m-2 border rounded-full border-violet-600 text-gray-100 hover:border-blue-600 hover:text-red-600 transition-all duration-200' />
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
        </section>
    )
}

export default Blogs
