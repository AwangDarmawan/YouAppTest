
"use client"
import Back from "@/component/Profile/Back"
import { useAuth } from "@/Context/AuthContext";
import { useEffect } from "react";


function profil() {
  
 
  const { token, user, fetchProfilContext} = useAuth();
  

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
      name: user.interests[i],
      img: user.interests[i + 1],
    });
  }
  return (
    <>
    
    
 <div className="flex">
 
     
    <Back/>
    
    <p className="text-sm text-white  mx-auto">{user.email}</p>
    </div>



<div className="flex items-center mb-6 relative">
        {interests.map((interest, index) => (
          <div key={index} className="w-full" >
            <img
              src={interest.img}
              alt={interest.name}
              className="rounded-lg w-full h-190 object-cover"
            />
          </div>
        ))}
  <h1 className="absolute  bottom-4 left-4 text-lg font-semibold text-white bg-opacity-60 px-2 py-1 rounded">
  <p>{user.username}</p>
  </h1>

</div>

 

   
    </>
  )
}

export default profil


