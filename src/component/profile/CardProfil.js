

import Back from "@/component/profile/Back"


function profil() {
 
  return (
    <>

 <div className="flex">
    <Back/>
    <p className="text-sm text-white  mx-auto">@jhondoe</p>
    </div>

  {/* <!-- Header --> */}
  <div className="flex items-center mb-6 relative ">
  <img
    src="/images/PotoReal.jpg"
    alt="John Doe"
    className="rounded-lg w-full h-190  object-cover"
  />
  
  <h1 className="absolute  bottom-4 left-4 text-lg font-semibold text-white bg-opacity-60 px-2 py-1 rounded">
    @johndoe123
  </h1>
</div>
   
    </>
  )
}

export default profil
