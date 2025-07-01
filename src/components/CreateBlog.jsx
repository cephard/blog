import { useState } from "react";
import { useNavigate } from "react-router";
import FeaturedImage from "./FeaturedImage";
import WriteParagraph from "./WriteParagraph";
import SectionHeading from "./SectionHeading";
import BlogDetails from "./BlogDetails";
import axios from "axios";
import PopUpWindow from "./PopUpWindow";

function CreateBlog() {
    const [title, setTitle] = useState('title');
    const [description, setDescription] = useState('description');
    const [imageURL, setImageURL] = useState('imageURL');
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState('content');
    const [errorText, setErrorText] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const pageReload = useNavigate();



    //uploads image to cloudinary and return back the https url to be assigned to a blog
    const uploadImage = async () => {
        const cloudImage = new FormData()
        cloudImage.append("file", selectedImage)
        cloudImage.append("upload_preset", "ml_default")
        cloudImage.append("cloud_name", "diisjfj96")

        const response = await axios.post("https://api.cloudinary.com/v1_1/diisjfj96/image/upload", cloudImage);
        return response.data.secure_url;
    }

    const uploadBlog = async (event) => {
        event.preventDefault();
        const cloudinaryURL = await uploadImage();


        await axios.post(`${baseUrl}/blogposts`, {
            title: title,
            description: description,
            imageURL: cloudinaryURL,
            tags: tags,
            content: content
        })

        pageReload('/BlogPost')
    }

    return (
        <form onSubmit={uploadBlog}>
            <PopUpWindow errorText={errorText} changeErrorText={setErrorText} />
            <SectionHeading heading="Create a New Blog" />
            <FeaturedImage changeSelectedImage={setSelectedImage} />
            <div className="grid xl:grid-cols-12 gap-6">
                {/* Editor Column */}
                <div className="xl:col-span-8 space-y-6 h-full">
                    <h1 className="text-lg font-semibold">Draft Blog</h1>
                    <WriteParagraph changeParagraph={setContent} />
                </div>
                {/* Sidebar Column */}
                <div className="xl:col-span-4 space-y-6 h-full">
                    <h1 className="text-lg font-semibold">Assets</h1>
                    <BlogDetails changeTitle={setTitle} changeDescription={setDescription} changeTags={setTags}
                        changeErrorText={setErrorText} />
                </div>
            </div>
            <div className="flex w-full p-4 mt-4 items-center justify-center">
                <button type="submit"
                    className="rounded-full hover:bg-violet-600 px-4 py-2 border border-violet-600 delay-100 ease-in-out hover:text-white">
                    Upload</button>
            </div>
        </form >
    );
}

export default CreateBlog;
