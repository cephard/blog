import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLightbulb, faClock, faCode } from "@fortawesome/free-solid-svg-icons"
import services from '../data/myServices.json'

{/**rememeber to overlay the text on the image for small screens */ }


function Services() {

    const iconMap = { faSearch, faLightbulb, faClock, faCode };
    return (
        <div className="relative grid jus lg:grid-cols-2 w-full py-4 gap-4">
            <h1 className="blog-heading">Web Development</h1>
            <div className="my-4 w-full grid relative">
                <ul className="w-full top-[-10%] lg:absolute space-y-5 md:text-xl text-zinc-600 flex justify-around gap-4
                max-md:grid max-md:grid-cols-2 max-md:py-4
                ">
                    {services.map(
                        service => (<li className="h-full text-base rounded border border-blue-400 p-2 shadow-md flex items-center flex-col justify-center gap-2" ><FontAwesomeIcon className="text-2xl bold" icon={iconMap[service.icon]} />
                            <span className="text-center">
                                {service.name}
                            </span> </li>
                        ))}
                </ul>
                <div className="mb-4"><img src="./3431856.jpg" alt="web development" className="rounded shadow-gray-400 shadow-md" /></div>
            </div>
            <div>
                <button className="inline-flex items-center justify-center rounded-full border hover:border-violet-600 px-4 py-1 my-3 bg-violet-600 text-zinc-50 transition-colors duration-200 hover:bg-transparent hover:text-violet-600 cursor-pointer">
                    Start Now
                </button>
            </div>
        </div>
    )
}

export default Services