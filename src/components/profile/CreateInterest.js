import Back from "@/components/profile/Back"

function CreateInterest() {
  return (
    <>  
        <div className="flex justify-between">  
        <Back/>
        <p className="text-sm text-bluewarna ">Save</p>
        </div>
        <div className=" py-10">
        <h3 className="text-transparent bg-clip-text bg-custom-gradient font-bold">Tell everyone about yourself</h3>
        <h1 className="text-white font-bold py-4">What interest you?</h1>
        <div className="mt-2 flex items-center border border-gray-300 rounded-md shadow-sm">
    <div className="flex flex-wrap gap-2 p-2">
      <span className="bg-gray-200 px-2 py-1 rounded-full text-sm flex items-center">
        Music
        <button className="ml-1 text-red-500 hover:text-red-700" onclick="removeTag()">&times;</button>
      </span>
      
    
    </div>
    <input
      type="text"
      className="flex-1 border-none focus:ring-0 focus:outline-none p-2 bg-gray-600"
      placeholder="Add interest"
      onKeyPress="addTag(event)"
    />
  </div>
        </div>
   
    </>
  )
}

export default CreateInterest
