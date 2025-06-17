import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function FeaturedImage({ changeSelectedImage }) {

    const [imageUrl, setImageUrl] = useState('imageURL');
    const [selectedImage, setSelectedImage] = useState(null);

    //selets the image from the input and asigns the local url to present on DOM and image object ready for upload
    const getImagePath = (event) => {
        const image = event.target.files[0];
        if (!image) return;
        const fileUrl = URL.createObjectURL(image)
        setImageUrl(fileUrl);
        changeSelectedImage(image);
    }

    return (
        <>
            <img src={imageUrl} alt="" />
            <div className="featured-image-bg bg-white rounded border border-gray-300 p-4">
                <h1 className="text-lg font-semibold mb-2">Image</h1>
                <div className="p-4 border border-dashed rounded-lg hover:border-violet-600">
                    <label htmlFor="imageUpload"
                        className="w-full flex flex-col items-center justify-center hover:bg-gray-100 duration-300 transition-all text-gray-500 rounded p-4 hover:text-violet-400">
                        <FontAwesomeIcon icon={faCloudArrowUp} className="text-4xl" />
                        <p>Upload Image</p>
                        <input type="file" id="imageUpload" accept="image/*"
                            onChange={getImagePath}
                            className="hidden" />
                    </label>
                </div>
            </div>
        </>
    )
}

export default FeaturedImage


