
import CardProfil from "@/component/profile/CardProfil"
import UpdateAbout from "@/component/profile/UpdateAbout"
function page() {
  return (
    <>
       
       <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-md mx-auto space-y-6">
        
        <CardProfil/>

       <UpdateAbout/>
      </div>
    </div>
    </>
  )
}

export default page
