import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLightbulb, faStream, faGears, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
//import inspirations from '../data/myinspirations.json'
import SectionHeading from './SectionHeading';


{/**rememeber to overlay the text on the image for small screens */ }


function Inspirations() {
    const [activeTrait, setActiveTrait] = useState(-1);
    const iconMap = { faSearch, faLightbulb, faPeopleGroup, faStream };
    const [message, setmessage] = useState('Writing code is expensive consider designing first!');

    const updateInspiration = (inspirationId, inspirationMessage) => {
        setActiveTrait(inspirationId);
        setmessage(inspirationMessage)
    }

    const inspirations = [
        {
            "id": 1,
            "name": "Curiosity",
            "icon": "faSearch",
            "message": "To be curious is to question uncertainities and find cause an effect"
        },
        {
            "id": 2,
            "name": "Innovation",
            "icon": "faLightbulb",
            "message": "We strive to invent and build from uncertainity but from our immagination"
        },
        {
            "id": 3,
            "name": "Simplicity",
            "icon": "faStream",
            "message": "We don not need to over engineer, instead we solve problems with our inventions"
        },
        {
            "id": 4,
            "name": "Cohession",
            "icon": "faPeopleGroup",
            "message": "No man is an island so we join forces and a work hand in hand as a community"
        }
    ];

    return (
        <section>
            <SectionHeading heading="Inspiration" />
            <div className="relative grid lg:grid-cols-2 w-full gap-4">
                <div className="flex flex-col justify-center space-y-4">
                    <span>
                        When expressing your thoughts on this platform, do not be constrained by your fears.
                        As from time to time we face imposter syndrom, we need to remember that we are just as good as we belive our abilities can rationally be.
                    </span>
                    <span>
                        To keep you cracking on we have deviced a set of rational traits to be flagposted for inspiration and motivation.
                    </span>
                </div>
                <div className="my-4 w-full grid relative place-items-center">
                    <ul className="w-full top-[-10%] lg:absolute space-y-5 md:text-xl text-zinc-600 flex justify-around gap-4
                max-md:grid max-md:grid-cols-2 max-md:py-4">
                        {inspirations.map(
                            inspiration => (<button
                                key={inspiration.id} className={`${activeTrait === inspiration.id ? 'bg-blue-400 text-white' : ''} 
                                h-full text-base rounded border border-blue-400 p-2 shadow-md flex items-center flex-col justify-center gap-2 hover:scale-105
                                hover:bg-violet-500 hover:text-white transition-transform duration-700`}
                                onClick={() => updateInspiration(inspiration.id, inspiration.message)}>
                                <FontAwesomeIcon className="text-2xl bold" icon={iconMap[inspiration.icon]} />
                                <span className="text-center">
                                    {inspiration.name}
                                </span> </button>
                            ))}
                    </ul>
                    <div className='rounded-2xl shadow-md bg-white p-8 w-full h-full flex text-center items-center min-h-80'>
                        <span className="bg-gradient-to-r from-violet-500 to-blue-500 font-bold text-2xl bg-clip-text text-transparent drop-shadow drop-shadow-gray-200">{message}</span>
                    </div>
                </div>
                <div>
                    <button className="inline-flex items-center justify-center rounded-full border hover:border-violet-600 px-4 py-1  bg-violet-600 text-zinc-50 transition-colors duration-200 hover:bg-transparent hover:text-violet-600 cursor-pointer">
                        Read Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Inspirations
