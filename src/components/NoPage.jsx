import { Link } from "react-router"

function NoPage() {
    return (
        <div className="w-full h-screen text-gray-700 bg-zinc-500 flex flex-col items-center justify-center gap-2">
            <h1 className="blog-heading"> 404</h1 >
            <p>Oops! seems like you are lost</p>
            <p>Lets get you back <Link to={`/`} className="ml-1 px-4 py-2 bg-violet-800 rounded-full text-gray-300 hover:bg-violet-600 transition duration-200">Home</Link></p>
        </div>
    )
}

export default NoPage