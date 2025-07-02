import SectionHeading from "./SectionHeading"

function SignIn() {
    return (
        <section className="w-full flex flex-col gap-4 items-center justify-around relative">
            <SectionHeading heading="Sign In" />
            <form className="flex flex-col h-1/2 bg-transparent rounded-2xl lg:bg-gray-50 w-full lg:p-16 md:w-[70%] lg:shadow-lg justify-between">
                <div className="grid gap-8">
                    <h1>Name</h1>
                    <input type="text" placeholder="johndoe@explample.com" className="w-full border-b px-2 py-1 text-gray-800 focus:outline-none focus:border-violet-600" />
                    <h1>Password</h1>
                    <input type="password" placeholder="password" className="w-full border-b px-2 py-1 text-gray-800 focus:outline-none focus:border-violet-600" />
                    <span className="flex space-x-2">
                        <p>           Stay signed in                    </p>
                        <input type="checkbox" />
                    </span>
                </div>
                <div className="flex justify-around items-center font-light text-gray-400">
                    <hr className="w-[50%]" />
                    <p className="m-4">or</p>
                    <hr className="w-[50%]" />
                </div>
                here using like google login
                <button className="border rounded h-8 hover:border-violet-600 self-center w-1/4 mt-2">Continue</button>
            </form>
        </section>
    )
}

export default SignIn
