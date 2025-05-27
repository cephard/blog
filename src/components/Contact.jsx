function Contact() {
    return (
        <section className="h-screen w-full flex flex-col gap-8 items-center justify-around relative">
            <div className="w-full">
                <h1 className="blog-heading">Contact Me</h1>
            </div>
            <form action="" className="h-1/2 flex flex-col justify-center gap-4 bg-transparent rounded-2xl lg:bg-gray-50 w-full lg:p-16 md:w-[70%] shadow-lg">
                <h1>Name</h1>
                <input type="text" placeholder="John Doe" className="w-full border-b px-2 py-1 text-gray-800 focus:outline-none focus:border-violet-600" />
                <h1>Email</h1>
                <input type="text" placeholder="johndoe@explample.com" className="w-full border-b px-2 py-1 text-gray-800 focus:outline-none focus:border-violet-600" />
                <h1>Message</h1>
                <input className="w-full border-b px-2 py-1 text-gray-800 focus:outline-none focus:border-violet-600" placeholder="Text goes here..." name="" id=""></input>
                <button className="border rounded h-8 hover:border-violet-600 self-center w-1/4 mt-2">Send</button>
            </form>
            <div
                className="mb-6 w-full h-1/2 rounded overflow-hidden"
            >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19814.99356019577!2d-3.9685963984808597!3d51.62551364775827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e45555a4e97b1%3A0x3d77128e2fe7cb74!2sSwansea!5e0!3m2!1sen!2suk!4v1746789844610!5m2!1sen!2suk"
                    className="w-full h-full"></iframe>
            </div>
        </section>
    )
}

export default Contact

