import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function FeaturedImage({ changeImageURL }) {

    const [imageUrl, setImageUrl] = useState('imageURL');
    const [selectedImage, setSelectedImage] = useState(null);

    const getImagePath = (event) => {
        const image = event.target.files[0];
        if (!image) return;
        const fileUrl = URL.createObjectURL(image)
        setImageUrl(fileUrl);
        setSelectedImage(image);
    }

    const uploadImage = async () => {
        if (!selectedImage) return;

        const cloudImage = new FormData()
        cloudImage.append("file", selectedImage)
        cloudImage.append("upload_preset", "ml_default")
        cloudImage.append("cloud_name", "diisjfj96")

        const response = await fetch("https://api.cloudinary.com/v1_1/diisjfj96/image/upload",
            {
                method: "POST",
                body: cloudImage
            })

        const uploadImage = await response.json()
        console.log(uploadImage)
    }

    return (
        <>
            <img src={imageUrl} alt="" />
            <div className=".featured-image-bg bg-white rounded border border-gray-300 p-4">
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


