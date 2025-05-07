
function Footer() {
    return (
        <footer className="bg-zinc-600 text-gray-300 w-full py-12 items-center">
            <div className="grid sm:grid-cols-4 container gap-6">
                <div>
                    <p className="mb-6 text-gray-200 font-light">
                        &copy; 2025 Cephard Kipkemboi. <br />All right reserved.
                    </p>
                    <hr className="w-[90%]" />
                </div>
                <ul className="space-y-2">
                    <h1 className="font-bold text-gray-200">Progamming</h1>
                    <li>Algorithms</li>
                    <li>Data Structures</li>
                    <li>O notation</li>
                    <li></li>
                </ul>
                <ul className="space-y-2">
                    <h1 className="font-bold text-gray-200">Research</h1>
                    <li>Artificail Intelligence</li>
                    <li>Robotics</li>
                    <li>Inter disciplinary</li>
                </ul>
                <ul className="space-y-2">
                    <h1 className="font-bold text-gray-200">Casual Topics</h1>
                    <li>Work related hobbies</li>
                    <li>What other developers say</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer