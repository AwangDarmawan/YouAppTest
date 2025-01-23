
"use client"
import Back from "@/component/profile/back"
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import Image from 'next/image';


function cardprofil() {
 
   
  const { token, user, fetchProfilContext} = useAuth();
  console.log("user data" ,user)

  useEffect(() => {
    if (!user && token) {
      fetchProfilContext(token);
    }
  }, [user, token, fetchProfilContext]);

  if (!user) {
    return <p>Failed to load profile.</p>;
  }

  const interests = [];
  for (let i = 0; i < user.interests.length; i += 2) {
    interests.push({
      gender: user.interests[i],
      img: user.interests[i + 1],
    });
  }
  return (
    <>
    
    
 <div className="flex">
 
     
    <Back/>
    
    <p className="text-sm text-white  mx-auto">{user.email}</p>
    </div>


    {interests.map((interest, index) => (
    <div className="flex items-center mb-6 relative bg-gray-800 " key={index} >
          <div className="w-full " >
            <Image
              src={interest.img}
              alt="avatar"
              className="rounded-lg w-full h-190 object-cover bg-transparent "
              width={64}  // Tentukan lebar gambar, sesuai dengan ukuran yang Anda inginkan
    height={64}
            />
          </div>
      
  <h1 className="absolute  bottom-4 left-4 text-lg font-semibold text-white bg-opacity-60 px-2 py-1 rounded">
  <p>{user.username}</p>
  <p>{interest.gender}</p>
  </h1>

</div>

))}

   
    </>
  )
}

export default cardprofil


