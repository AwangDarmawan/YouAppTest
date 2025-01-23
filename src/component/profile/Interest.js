import Link from "next/link"
import Image from 'next/image';
function Interest() {
  return (
    <>
      {/* <!-- Interest Section --> */}
  <div className="bg-gray-800 rounded-lg px-4 py-5">
    <div className="flex justify-between items-center">
      <h2 className="text-sm font-medium">Interest</h2>
      <Link 
       
        href="/interest">         
      {/* <Image src="/images/Arah.svg" alt="..." 
    
      className='hover:text-darkgold underline'/> */}
       <Image src="/images/Arah.svg" alt="Update Profile" width={20} height={20} className="hover:text-darkgold underline" />
      </Link>
    </div>
    <p className="text-sm text-gray-400 mt-6">
      Add in your interest to find a better match
    </p>
  </div>
    </>
  )
}

export default Interest
