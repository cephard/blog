import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSearch, faLightbulb, faClock, faCode } from "@fortawesome/free-solid-svg-icons"


{/**rememeber to overlay the text on the image for small screens */ }


function Services() {
    return (
        <div className="grid jus lg:grid-cols-2 w-full py-4">
            <div className="my-4 w-full grid ">
                <h1 className="blog-heading">Web Development</h1>
                <ul className="space-y-5 md:text-xl text-zinc-600 grid grid-cols-2 gap-4">
                    <li><FontAwesomeIcon icon={faSearch} className="" /> Search Engine Optimisation</li>
                    <li><FontAwesomeIcon icon={faLightbulb} className="" /> Lightweight</li>
                    <li><FontAwesomeIcon icon={faClock} className="" /> Modern</li>
                    <li><FontAwesomeIcon icon={faCode} className="" /> Minimalist</li>

                </ul>
                <div>
                    <button className="inline-flex items-center justify-center rounded-full border hover:border-violet-600 px-4 py-1 my-3 bg-violet-600 text-zinc-50 transition-colors duration-200 hover:bg-transparent hover:text-violet-600 cursor-pointer">
                        Start Now
                    </button>
                </div>

            </div>
            <div className="mb-4"><img src="./3431856.jpg" alt="web development" className="rounded shadow-gray-400 shadow-md" /></div>
        </div>
    )
}

export default Services