import { useState, useEffect } from "react"

function FeaturedImage() {

    const [imageUrl, setImageUrl] = useState('./setgetlogo.png');

    useEffect(() => { }, [imageUrl])

    return (
        <div className="featured-image-bg bg-white rounded border border-gray-300 p-4" style={{ backgroundImage: `url(${imageUrl})` }}>
            <h1 className="text-lg font-semibold mb-2">Featured Image</h1>
            <div className="border-2 border-dashed border-gray-300 rounded flex items-center justify-center h-48">
                <span className="text-gray-500">Upload Image</span>
                <input type="file" accept="image/*" className="bg-violet-400 p-4 rounded" onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                        setImageUrl(URL.createObjectURL(file));
                    }
                }} />
            </div>
        </div>
    )
}

export default FeaturedImage


