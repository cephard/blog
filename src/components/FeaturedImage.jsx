import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";


function FeaturedImage() {

    const [imageUrl, setImageUrl] = useState('./setgetlogo.png');

    useEffect(() => { }, [imageUrl])

    const getImagePath = (event) => {
        const image = event.target.files[0];
        const fileUrl = URL.createObjectURL(image)
        setImageUrl(fileUrl);
    }

    return (
        <div className=".featured-image-bg bg-white rounded border border-gray-300 p-4"
            style={{ backgroundImage: `url(${imageUrl})` }}>
            <h3>Upload Image</h3>
            <div className="p-4 border border-dashed rounded-lg hover:border-violet-600">
                <label htmlFor="imageUpload"
                    className="w-full flex flex-col items-center justify-center hover:bg-gray-100 duration-300 transition-all text-gray-500 rounded p-4 hover:text-violet-600">
                    <FontAwesomeIcon icon={faCloudArrowUp} className="text-4xl" />
                    <p>Upload Image</p>
                    <input type="file" id="imageUpload" accept="image/*"
                        onChange={getImagePath}
                        className="hidden" />
                </label>

            </div>
        </div>
    )
}

export default FeaturedImage


