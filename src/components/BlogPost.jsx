import { data, redirect, useLocation, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import axios from 'axios';

function BlogPost() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const { state } = useLocation();
    const { blog: currentBlog } = state || {};
    const { id } = useParams();
    const [blog, setBlog] = useState(currentBlog)
    const [error, setError] = useState(null);
    const redirectToBlogs = useNavigate();

    useEffect(() => {
        if (!blog) {
            axios.get(`${baseUrl}/blogposts/${id}`)
                .then(currentBlog => {
                    setBlog(currentBlog.data)
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }, [blog, baseUrl, id]);

    const deleteBlog = () => {
        axios.delete(`${baseUrl}/blogposts/${id}`)
            .then(() => redirectToBlogs('/Blogs'))
            .catch(error => {
                setError(error.message);
            })
    }

    if (!blog) return <div> Blog Not Found!</div>;
    if (error) return <div className='text-red-500 text-2xl p-4 flex w-full justify-center'>Error : {error}</div>;

    return (
        <div>
            <h1 className='blog-heading'>{blog.title}</h1>
            <div className='relative'>
                <img src={blog.imageURL} alt={blog.title} className="w-full max-h-[600px] object-cover rounded-lg mb-6" />
                <FontAwesomeIcon icon={faTrashAlt} className='absolute right-0 top-0 p-2 m-2 border rounded-full border-violet-600 text-gray-100 hover:border-red-600 hover:text-red-600 transition-all duration-200'
                    onClick={deleteBlog} />
            </div>

            <div className='flex pb-4 text-violet-600 font-bold'>
                {blog.tags.map(tag => (
                    //                    <span key={tag} className='bg-violet-200 rounded-full px-4 '>{tag}</span>
                    <span key={tag} className="inline-block bg-violet-200 rounded-full px-3 py-1 text-xs font-extralight text-blue-800 mr-2 mb-2 tracking-wider">
                        {tag}
                    </span>
                ))}
            </div>
            <p className='base-text'>
                {blog.content}
            </p>
        </div>
    )
}

export default BlogPost
