import Link from "next/link"

import Back from "../profile/Back"

function register() {
  return (
    <>
        <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-md mx-auto space-y-6">
        <Back/>
            <div className="bg-transparent rounded-lg shadow-lg p-3 w-full max-w-md">
           
            <h1 className="text-xl font-bold text-white my-6 ">Register</h1>
            <form className="flex flex-col gap-4">
                <input
                type="email"
                className="bg-transparent border border-gray-300 text-white rounded-lg h-12 px-3 w-full text-sm"
                placeholder="Enter Email"
                required
                />

                <input
                type="text"
                className="bg-transparent border border-gray-300 text-white rounded-lg h-12 px-3 w-full text-sm"
                placeholder="Create Username"
                required
                />
                <input
                type="password "
                name="password"
                id="password"
                placeholder="Create Password"
                className=" bg-transparent border border-gray-300  rounded-lg h-12 px-3 w-full text-white text-sm"
                required
                />

                <input
                type="password "
                name="password"
                id="password"
                placeholder="Confirm Password"
                className=" bg-transparent border border-gray-300  rounded-lg h-12 px-3 w-full text-white text-sm"
                required
                />

                <button className='text-white bg-bluewarna rounded-lg h-12 px-3 w-full '>Register</button>
                
                <p className="text-sm font-light text-gray-500 flex justify-center ">
                Have an account? 
                <Link
                    href="/"
                    className='text-darkgold underline'
                >
                    Login here
                </Link>
                </p>
               
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default register
