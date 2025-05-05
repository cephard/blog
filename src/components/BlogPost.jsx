import blogs from '../data/blogs';
import { useParams } from 'react-router';

function BlogPost() {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id.toString() === id);

    if (!blog) return <div> Blog Not Found!</div>

    return (
        <div>
            <h1 className='blog-heading'>{blog.title}</h1>
            <img src={blog.image} alt={blog.title} className="w-full max-h-[600px] object-cover rounded-lg mb-6" />
            <p>
                {blog.content}
            </p>
        </div>


    )
}

export default BlogPost
