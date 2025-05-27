import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLightbulb, faStream, faGears } from "@fortawesome/free-solid-svg-icons"
import inspirations from '../data/myinspirations.json'

{/**rememeber to overlay the text on the image for small screens */ }


function Inspirations() {
    const [activeTrait, setActiveTrait] = useState(-1);
    const iconMap = { faSearch, faLightbulb, faGears, faStream };
    const [message, setmessage] = useState('');

    const updateInspiration = (serviceId, serviceMessage) => {
        setActiveTrait(serviceId);
        setmessage(serviceMessage)
    }

    return (
        <div>
            <h1 className="blog-heading">Inspiration</h1>
            <div className="relative grid lg:grid-cols-2 w-full py-4 gap-4">
                <div>
                    <span>
                        I have always been fascinate with the would of technology. It never started with fancy gaming laptops or custom made cpus with water cooling systems and
                        thousand dollar nvdia gpu with cuda chips. It all started with maths. Yes, the good all fashion pen and paper calculatios of BODMAS.I know some call it PEMDAS but you ge the gist do't you.
                        <br />
                        In my country, the most unpopular teach ws the mathematic teachers, weather they are going abover and beond or just idol, I leave it to with your immagination. All I know is they sacrifices those teachers made were worth it.
                        Dont get me wrong my English teacher was my favourite 'bless his soul' but the mark the math teacher left on me never faded.
                        <br />
                        I draw my inspiration and motivation from their character of intensive revisons, early and late night assignements with unrealistic expectations from studens. Kinda sounds like the leaderships principles from I studies for my interview roud that I field missearbly.
                        So I deviced my own set of blueprint of what makes me a role model and stand out from the rest.
                    </span>
                </div>
                <div className="my-4 w-full grid relative place-items-center">
                    <ul className="w-full top-[-10%] lg:absolute space-y-5 md:text-xl text-zinc-600 flex justify-around gap-4
                max-md:grid max-md:grid-cols-2 max-md:py-4">
                        {inspirations.map(
                            service => (<li
                                key={service.id} className={`${activeTrait === service.id ? 'bg-blue-400 text-white' : ''} 
                                h-full text-base rounded border border-blue-400 p-2 shadow-md flex items-center flex-col justify-center gap-2 hover:scale-110
                                hover:bg-violet-500 hover:text-white transition-transform duration-1000`}
                                onClick={() => updateInspiration(service.id, service.message)}>
                                <FontAwesomeIcon className="text-2xl bold" icon={iconMap[service.icon]} />
                                <span className="text-center">
                                    {service.name}
                                </span> </li>
                            ))}
                    </ul>
                    <div className='rounded shadow-gray-400 shadow-md bg-white p-4 w-full h-full flex justify-center items-center'>
                        <span>{message}</span>
                    </div>
                </div>
                <div>
                    <button className="inline-flex items-center justify-center rounded-full border hover:border-violet-600 px-4 py-1  bg-violet-600 text-zinc-50 transition-colors duration-200 hover:bg-transparent hover:text-violet-600 cursor-pointer">
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Inspirations
