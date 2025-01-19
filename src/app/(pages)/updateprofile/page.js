
"use client"

import CardProfil from "@/component/Profile/CardProfil"
import UpdateAbout from "@/component/Profile/CrudAbout"
import Interest from "@/component/Profile/Interest"
import { useAuth } from "@/Context/AuthContext";


function page() {
  const {Logout} = useAuth();

  return (
    <>
       
       <div className="min-h-screen bg-gray-900 text-white p-4">
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

export default page
