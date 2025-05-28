import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons"
import SectionHeading from "./SectionHeading";

function Contact() {
    return (
        <section className="w-full flex flex-col gap-4 items-center justify-around relative">
            <SectionHeading heading="Contact Me" />
            <div className="flex flex-col h-1/2 bg-transparent rounded-2xl lg:bg-gray-50 w-full lg:p-16 md:w-[70%] lg:shadow-lg justify-between">
                <div className="flex max-md:flex-col max-md:space-y-3 lg:justify-between w-full p-8 border rounded shadow-md">
                    <span className="flex items-center gap-3">< FontAwesomeIcon icon={faPhone} />07979474451</span>
                    <span className="flex items-center gap-3">< FontAwesomeIcon icon={faHouse} />SA1 3AN</span>
                    <span className="flex items-center gap-3">< FontAwesomeIcon icon={faEnvelope} />cephkip@gmail.com</span>
                </div>
                <form action="" className="flex flex-col w-full justify-center gap-4 p-8">
                    <h1>Name</h1>
                    <input type="text" placeholder="John Doe" className="w-full border-b px-2 py-1 text-gray-800 focus:outline-none focus:border-violet-600" />
                    <h1>Email</h1>
                    <input type="text" placeholder="johndoe@explample.com" className="w-full border-b px-2 py-1 text-gray-800 focus:outline-none focus:border-violet-600" />
                    <h1>Message</h1>
                    <input className="w-full border-b px-2 py-1 text-gray-800 focus:outline-none focus:border-violet-600" placeholder="Text goes here..." name="" id=""></input>
                    <button className="border rounded h-8 hover:border-violet-600 self-center w-1/4 mt-2">Send</button>
                </form>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19814.99356019577!2d-3.9685963984808597!3d51.62551364775827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e45555a4e97b1%3A0x3d77128e2fe7cb74!2sSwansea!5e0!3m2!1sen!2suk!4v1746789844610!5m2!1sen!2suk"
                className="w-full h-[80vh] mt-8 shadow-lg"></iframe>
        </section>
    )
}

export default Contact

