import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"


{/**rememeber to overlay the text on the image for small screens */ }


function Services() {
    return (
        <>
            <div className="grid grid-cols-2 w-[90%] my-8 mx-8">
                <div className="my-4">
                    <h1 className="blog-heading">Web Development</h1>
                    <ul className="space-y-5 text-xl text-zinc-600">
                        <li><FontAwesomeIcon icon={faCheck} className="ml-4 mr-2 " /> Search Engine Optimisation</li>
                        <li><FontAwesomeIcon icon={faCheck} className="ml-4 mr-2 " /> Lightweight</li>
                        <li><FontAwesomeIcon icon={faCheck} className="ml-4 mr-2 " /> Modern</li>
                        <li><FontAwesomeIcon icon={faCheck} className="ml-4 mr-2 " /> Minimalist</li>
                        <li> <span className="inline-flex items-center justify-center rounded-full border hover:border-violet-600 px-4 py-1 my-3 bg-violet-600 text-zinc-50 transition-colors duration-200 hover:bg-transparent hover:text-violet-600">
                            Start Now
                        </span></li>
                    </ul>
                </div>
                <div className="mb-4"><img src="/3431856.jpg" alt="web development" className="rounded" /></div>
            </div>
        </>
    )
}

export default Services