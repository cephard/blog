import { useState } from "react"

function BlogDetails({ changeTitle, changeDescription, changeTags }) {
    const [tags, setTags] = useState([]);

    return (
        <div className="grid gap-4 bg-white rounded border shadow border-gray-300 p-4">
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
                            setTags([...tags, event.target.value.trim()])
                            event.target.value = '';
                        }
                    }}
                    onChange={changeTags(tags)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-600"
                />
            </div>
        </div>
    )
}

export default BlogDetails
