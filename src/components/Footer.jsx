function Footer() {
    return (
        <footer className="bg-zinc-600 text-gray-300 w-full py-12 items-center">
            <div className=" flex justify-around container">
                <div className="flex flex-col gap-4">
                    <p className="font-semibold">
                        &copy; 2025 Cephard Kipkemboi. All right reserved.
                    </p>
                    <hr className="border-zinc-400" />
                </div>
                <ul className="space-y-2 mt-2">
                    <h1 className="font-bold">Progamming</h1>
                    <li>Algorithms</li>
                    <li>Data Structures</li>
                    <li>O notation</li>
                    <li></li>
                </ul>
                <ul className="space-y-2 mt-2">
                    <h1 className="font-bold">Research</h1>
                    <li>Artificail Intelligence</li>
                    <li>Robotics</li>
                    <li>Inter disciplinary</li>
                </ul>
                <ul className="space-y-2 mt-2">
                    <h1 className="font-bold">Casual Topics</h1>
                    <li>Work related hobbies</li>
                    <li>What other developers say</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer