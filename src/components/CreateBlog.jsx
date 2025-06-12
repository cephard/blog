import FeaturedImage from "./FeaturedImage";
import WriteParagraph from "./WriteParagraph";
import SectionHeading from "./SectionHeading";
import BlogDetails from "./BlogDetails";
import { useState } from "react";
import axios from "axios";
import PopUpWindow from "./PopUpWindow";

function CreateBlog() {
    const [title, setTitle] = useState('title');
    const [description, setDescription] = useState('description');
    const [imageURL, setImageURL] = useState('imageURL');
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState('content');
    const [errorText, setErrorText] = useState(null);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    return (
        <form>
            <PopUpWindow errorText={errorText} />
            <SectionHeading heading="Create a New Blog" />
            <div className="grid xl:grid-cols-12 gap-6">
                {/* Editor Column */}
                <div className="xl:col-span-8 space-y-6">
                    <h1 className="text-lg font-semibold">Draft Blog</h1>
                    <WriteParagraph />
                </div>
                {/* Sidebar Column */}
                <div className="xl:col-span-4 space-y-6">
                    <h1 className="text-lg font-semibold">Assets</h1>
                    <BlogDetails changeTitle={setTitle} changeDescription={setDescription} changeTags={setTags} changeErrorText={setErrorText} />
                    <FeaturedImage changeImageURL={setImageURL} />
                </div>
            </div>
            <div className="flex w-full p-4 mt-4 items-center justify-center">
                <button
                    onClick={
                        (event) => {
                            event.preventDefault();
                            axios.post(`${baseUrl}/blogposts`, {
                                title: title,
                                description: description,
                                imageURL: imageURL,
                                tags: tags,
                                content: content
                            })
                        }
                    }
                    className="rounded-full hover:bg-violet-600 px-4 py-2 border border-violet-600 delay-100 ease-in-out hover:text-white">Upload</button>
            </div>
        </form >
    );
}

export default CreateBlog;