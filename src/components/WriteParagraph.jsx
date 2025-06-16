import { useState, useEffect } from "react";
import MinimalButton from './MinimalButton';

function WriteParagraph() {
    const [activeParagragh, setActiveParagragh] = useState('');
    const [paragraph, setParagraph] = useState('');

    //setting the paragrapgh to display what is being typed 
    useEffect(() => {
        const timer = setTimeout(() => {
            setParagraph(activeParagragh)
        }, 1000)
        return () => clearTimeout(timer);
    }, [activeParagragh]
    );

    //replaces \n from text area to html br tag
    const formatTextWithLineBreaks = (str) => {
        return str.replace(/\n/g, "<br />");
    };


    return (
        <div className="grid gap-4">

            {/**
         * Component that diplays each paragrph of a blog post 
         */}
            <div className="bg-white shadow rounded border-gray-300 p-4">
                <span className="whitespace-pre-wrap break-all"
                    dangerouslySetInnerHTML={{ __html: formatTextWithLineBreaks(paragraph) }} ></span> {/**Formats plain text to html */}
                <div className="py-2 flex justify-end">
                    <MinimalButton name="Edit" primary="text-violet-600 hover:bg-violet-100" />
                    <MinimalButton name="Delete" primary="text-red-600 hover:bg-red-100"
                        onClick={() => {
                            setActiveParagragh('')
                        }} />
                </div>
            </div>


            <div className="bg-white shadow rounded border-gray-300 p-4">
                <h1 className="text-lg font-bold pb-4">Write Paragraph</h1>
                <textarea name="" id=""
                    value={activeParagragh}

                    //determines the state and value of the text area prevents it fro recursively changing
                    onChange={(event) => setActiveParagragh(event.target.value)}
                    className="border w-full h-[25vh] outline-none focus:border-violet-400 rounded p-2"></textarea>

                <div className="py-2 flex justify-end">
                    <MinimalButton name="Edit" primary="text-violet-600 hover:bg-violet-100 " />
                    <MinimalButton name="Clear" primary="text-gray-600 hover:bg-gray-100" clickEvent={() => setActiveParagragh('')} />
                </div>
            </div>
        </div>
    )
}

export default WriteParagraph
