import CardProfil from "@/component/profile/CardProfil"
import About from "@/component/profile/About"
import Back from "@/component/profile/Back"
function page() {
  return (
    <>
  
    
    
    <div className="min-h-screen bg-gray-900 text-white p-4">
    <div className="max-w-md mx-auto space-y-6">
      <CardProfil/>
      <About/>
    </div>
    </div>


    </>
  )
}

export default page
