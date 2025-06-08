import { data, useLocation, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPost() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const { state } = useLocation();
    const { blog: currentBlog } = state || {};
    const { id } = useParams();
    const [blog, setBlog] = useState(currentBlog)
    const [error, setError] = useState(null);

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

    if (!blog) return <div> Blog Not Found!</div>;
    if (error) return <div className='text-red-500 text-2xl p-4 flex w-full justify-center'>Error : {error}</div>;

    return (
        <div>
            <h1 className='blog-heading'>{blog.title}</h1>
            <img src={blog.imageURL} alt={blog.title} className="w-full max-h-[600px] object-cover rounded-lg mb-6" />

            <div className='flex justify-around pb-4 text-violet-600 font-bold'>
                {blog.tags.map(tag => (
                    <span key={tag} className='bg-violet-200 rounded-full px-4 '>{tag}</span>
                ))}
            </div>
            <p className='base-text'>
                {blog.content}
            </p>
        </div>
    )
}

export default BlogPost
