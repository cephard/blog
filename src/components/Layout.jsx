import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Layout() {
    return (
        <div className='w-full bg-gradient-to-r from-fuchsia-50/50 via-violet-200/50 to-blue-200/50
    flex flex-col min-h-screen items-center'>
            <Navbar />
            <main className="flex-1 pt-24 pb-12 container">
                <Outlet />
                <span className="flex items-center justify-center bg-gray-400 right-0 bottom-0 text-2xl m-8 fixed space-x-2">
                    Click to chat with us.<FontAwesomeIcon icon={faMessage} className="text-white" />
                </span>
            </main>
            <Footer />
        </div>
    )
}

export default Layout