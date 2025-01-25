
"use client"

// import CardProfil from "@/components/profile/CardProfil"
// import UpdateAbout from "@/components/profile/CrudAbout"
// import Interest from "@/components/profile/Interest"
// import { useAuth } from "@/context/AuthContext";
import CardProfil from "@components/profile/CardProfil"
import UpdateAbout from "@components/profile/CrudAbout"
import Interest from "@components/profile/Interest"
import {useAuth} from "@context/AuthContext"


function UpdatePage() {
  const {Logout} = useAuth();

  return (
    <>
       
       <div className="min-h-screen  text-white p-4">
      <div className="max-w-md mx-auto space-y-6">
        
        <CardProfil/>
       <UpdateAbout/>
       <Interest/>
       <button
      onClick={Logout}
            className="mt-6 text-white bg-red-500 rounded-lg px-4 py-2 w-full"
          >
            Logout
          </button>
      </div>
    </div>
    </>
  )
}

export default UpdatePage
