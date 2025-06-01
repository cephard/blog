import { useState } from "react";
import FeaturedImage from "./FeaturedImage";
import WriteParagraph from "./WriteParagraph";
import SectionHeading from "./SectionHeading";

function CreateBlog() {
    return (
        <div className="w-full py-16">
            <SectionHeading heading="Create a New Blog" />
            <div className="grid xl:grid-cols-12 gap-6">
                {/* Editor Column */}
                <div className="xl:col-span-8 grid gap-6">
                    <h1 className="text-lg font-semibold">Draft Blog</h1>
                    <WriteParagraph />
                </div>

                {/* Sidebar Column */}
                <div className="xl:col-span-4 space-y-6">
                    <h1 className="text-lg font-semibold">Assets</h1>

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