import { useState } from "react";
import FeaturedImage from "./FeaturedImage";

function CreateBlog() {
    const [paragraphs, setParagraphs] = useState([]);
    const [currentParagraph, setCurrentParagraph] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const addParagraph = () => {
        if (currentParagraph.trim() !== "") {
            setParagraphs([...paragraphs, currentParagraph.trim()]);
            setCurrentParagraph("");
        }
    };

    const deleteParagraph = (index) => {
        setParagraphs(paragraphs.filter((_, i) => i !== index));
    };

    const startEdit = (index) => {
        setEditingIndex(index);
        setIsEdit(true);
    };

    const saveEdit = (index, newText) => {
        const updatedParagraphs = [...paragraphs];
        updatedParagraphs[index] = newText;
        setParagraphs(updatedParagraphs);
        setIsEdit(false);
        setEditingIndex(null);
    };

    return (
        <div className="w-full py-16">
            <h1 className="text-xl font-bold mb-4">Create a New Blog</h1>
            <div className="grid xl:grid-cols-12 gap-6">
                {/* Editor Column */}
                <div className="xl:col-span-8 grid gap-6">
                    <h1 className="text-lg font-semibold">Draft Blog</h1>

                    {paragraphs.map((paragraph, index) => (
                        <div className="relative bg-white rounded border border-gray-300 p-4" key={index}>
                            {isEdit && editingIndex === index ? (
                                <>
                                    <textarea
                                        value={paragraph}
                                        className="w-full min-h-[100px] bg-white rounded border p-2 border-gray-500 focus:outline-none focus:border-violet-600"
                                        onChange={(e) => {
                                            const updatedParagraphs = [...paragraphs];
                                            updatedParagraphs[index] = e.target.value;
                                            setParagraphs(updatedParagraphs);
                                        }}
                                    />
                                    <div className="flex justify-end mt-2 space-x-2">
                                        <button
                                            className="text-violet-600 px-3 py-1 rounded hover:bg-violet-50"
                                            onClick={() => saveEdit(index, paragraph)}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="text-gray-600 px-3 py-1 rounded hover:bg-gray-100"
                                            onClick={() => setIsEdit(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="whitespace-pre-wrap break-words">{paragraph}</div>
                                    <div className="flex justify-end mt-2 space-x-2">
                                        <button
                                            className="text-violet-600 px-3 py-1 rounded hover:bg-violet-50"
                                            onClick={() => startEdit(index)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red-600 px-3 py-1 rounded hover:bg-red-50"
                                            onClick={() => deleteParagraph(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}

                    <div className="bg-white rounded border border-gray-300 p-4">
                        <h1 className="text-lg font-semibold mb-2">Write Paragraph</h1>
                        <textarea
                            value={currentParagraph}
                            className="w-full min-h-[150px] bg-white rounded border p-2 border-gray-500 focus:outline-none focus:border-violet-600"
                            onChange={(e) => setCurrentParagraph(e.target.value)}
                        />
                        <div className="flex justify-end mt-2 space-x-2">
                            <button
                                className="text-violet-600 px-3 py-1 rounded hover:bg-violet-50"
                                onClick={addParagraph}
                            >
                                Add
                            </button>
                            <button
                                className="text-gray-600 px-3 py-1 rounded hover:bg-gray-100"
                                onClick={() => setCurrentParagraph("")}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="xl:col-span-4 space-y-6">
                    <div className="bg-white rounded border border-gray-300 p-4">
                        <h1 className="text-lg font-semibold mb-2">Tags</h1>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Tag 1"
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-600"
                            />
                        </div>
                    </div>
                    <FeaturedImage />
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;