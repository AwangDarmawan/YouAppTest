import Link from 'next/link'
 import Back from '@/component/profile/Back'
function login() {
  return (
    <>

        
    <div className="min-h-screen bg-gray-900 text-white p-4">
     <div className="max-w-md mx-auto space-y-6">
      <Back/>
        <div className="bg-transparent rounded-lg shadow-lg p-2 w-full max-w-md ">
            
        <h1 className="text-xl font-bold text-white my-6 ">Login</h1>
    <form className="flex flex-col gap-4">      
        <input
        type="email"
        className="bg-transparent border border-gray-300 text-white rounded-lg h-12 px-2 text-sm"
        placeholder="Enter Username/Email"
        required/>
                
        <input
        type="password "
        name="password"
        id="password"
        placeholder="Enter Password"
        className=" bg-transparent border border-gray-300  
        rounded-lg h-12 px-3 w-full text-white text-sm"
        required
        />

        <button className='text-white bg-bluewarna rounded-lg h-12 px- w-full ' >
        <Link  href="/profiles/"></Link>Login</button>
        <p className="text-sm font-light text-gray-500 
        flex justify-center ">No account?{' '}
            <Link
            href="/register/"
            className='text-darkgold underline'>
                    Register
            </Link>
            </p>
               
        </form>
        </div>
        </div>
        </div>

    </>
  )
}

export default login
