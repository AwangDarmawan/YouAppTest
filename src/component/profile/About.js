import Link from "next/link"


function About() {
  return (
    <>
   
  {/* <!-- About Section --> */}
  <div className="bg-gray-800 rounded-lg px-4 py-5">
    <div className="flex justify-between items-center">
      <h2 className="text-sm font-medium">About</h2>
      <Link 
        href="/updateprofile">         
      <img src="/images/Arah.svg" alt="..." 
    
      className='hover:text-darkgold underline'/>
      </Link>
    </div>
    
    <p className="text-sm text-gray-400 mt-6">
      Add in your about to help others know you better
    </p>
  </div>

  
    </>
  )
}

export default About
