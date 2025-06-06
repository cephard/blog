import { useState } from "react";
import FeaturedImage from "./FeaturedImage";
import WriteParagraph from "./WriteParagraph";
import SectionHeading from "./SectionHeading";
import Blogpost from './BlogPost';

function CreateBlog() {
    return (
        <section>
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

                    <div className="grid gap-4 bg-white rounded border shadow border-gray-300 p-4">
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold mb-2">Heading</h1>
                            <input
                                type="text"
                                placeholder="Heading"
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-600"
                            />
                        </div>

                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold mb-2">Description</h1>
                            <input
                                type="text"
                                placeholder="Description"
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-600"
                            />
                        </div>

                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold mb-2">Tags</h1>
                            <input
                                type="text"
                                placeholder="Tag 1, Tag 2, Tag 3"
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-600"
                            />
                        </div>
                    </div>
                    <FeaturedImage />
                </div>
            </div>
            <div className="flex w-full p-4 mt-4 items-center justify-center">
                <button className="rounded-full bg-violet-600 px-4 py-2 hover:bg-transparent border border-violet-600 delay-100 ease-in-out">Upload</button>
            </div>
        </section>
    );
}

export default CreateBlog;