import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Layout() {
    return (
        <div className='w-full bg-gradient-to-r from-fuchsia-50/50 via-violet-200/50 to-blue-200/50
    flex flex-col min-h-screen items-center'>
            <Navbar />
            <main className="flex-1 pt-24 pb-12 container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout