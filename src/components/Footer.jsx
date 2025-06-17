
function Footer() {
    return (
        <footer className="text-gray-800 w-full py-16 items-center font-light container">
            <hr className="mb-8 w-full" />
            <div className="max-lg:flex max-lg:flex-col-reverse grid sm:grid-cols-4 gap-6">
                <div>
                    <p className="mb-6 font-light text-sm max-lg:text-center">
                        &copy; 2025 Cephard Kipkemboi. <br />All right reserved.
                    </p>
                    <hr className="max-w-[80%] max-lg:w-full" />
                </div>
                <ul className="space-y-2">
                    <h1 className="font-bold">Progamming</h1>
                    <li>Algorithms</li>
                    <li>Data Structures</li>
                    <li>O notation</li>
                    <li></li>
                </ul>
                <ul className="space-y-2">
                    <h1 className="font-bold">Research</h1>
                    <li>Artificail Intelligence</li>
                    <li>Robotics</li>
                    <li>Inter disciplinary</li>
                </ul>
                <ul className="space-y-2">
                    <h1 className="font-bold">Casual Topics</h1>
                    <li>Work related hobbies</li>
                    <li>What other developers say</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer