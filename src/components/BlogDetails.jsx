import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function BlogDetails({ changeTitle, changeDescription, changeTags, changeErrorText }) {
    const [tags, setTags] = useState([]);

    function handleNewTag(neWTag) {
        if (tags.length === 5) {
            changeErrorText("tags cannot be more than 5")
            return;
        }
        if (!tags.includes(neWTag)) {
            setTags([...tags, neWTag])
        } else {
            changeErrorText("tag exists")
            return;
        }
    }

    return (
        <div className="relative grid gap-4 bg-white rounded border shadow border-gray-300 p-4">
            <div className="grid gap-2">
                <h1 className="text-lg font-semibold mb-2">Heading</h1>
                <input
                    type="text"
                    placeholder="Heading"
                    onChange={event => changeTitle(event.target.value)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-600"
                />
            </div>

            <div className="grid gap-2">
                <h1 className="text-lg font-semibold mb-2">Description</h1>
                <input
                    type="text"
                    placeholder="Description"
                    onChange={event => changeDescription(event.target.value)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-600"
                />
            </div>

            <div className="grid gap-2">
                <h1 className="text-lg font-semibold mb-2">Tags</h1>
                <input
                    type="text"
                    placeholder="Tag 1, Tag 2, Tag 3"
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            //const neWTag = event.target.value.trim();
                            handleNewTag(event.target.value.trim());
                            event.target.value = '';
                        }
                    }}
                    onChange={changeTags(tags)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-600"
                />
                <div className="flex space-x-2">
                    {tags.map((tag) =>
                        <span
                            key={tag}
                            className="flex bg-gray-300 px-2 gap-1 rounded items-center justify-baseline text-base font-thin ">
                            {tag}
                            <FontAwesomeIcon icon={faXmark} className="hover:text-gray-50 text-sm"
                                onClick={() => {
                                    //traverssing the array and copying it into a new copy avoiding 
                                    //the tag that matches the selected tag
                                    const updatedTags = tags.filter((t) => t !== tag);
                                    setTags(updatedTags);
                                }} />
                        </span>)}
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
