

function UpdateAbout() {
  return (
    <>
       {/* About Section */}
       <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <h2 className="text-sm text-darkgold">Save & Update</h2>
          </div>
          <form className="space-y-4">
            {/* Profile Image */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden ">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                
              </div>
              <button
                type="button"
                className="text-sm text-gray-400 hover:text-gray-200"
              >
                Add image
              </button>
            </div>

           {/* Display Name */}
      <div className="flex items-center mb-4">
        <label className="block text-sm w-1/3">Display name:</label>
        <input
          type="text"
          defaultValue="John Doe"
          className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

          {/* Gender */}
          <div className="flex items-center mb-4">
            <label className="block text-sm w-1/3">Gender:</label>
            <select
              defaultValue="Male"
              className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

            {/* Birthday */}
            <div className="flex items-center mb-4">
              <label className="block text-sm mb-1 w-1/3">Birthday:</label>
              <input
                type="date"
                defaultValue="1995-08-28"
                className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Horoscope */}
            <div className="flex items-center mb-4">
              <label className="block text-sm mb-1 w-1/3">Horoscope:</label>
              <input
                type="text"
                defaultValue="Virgo"
                readOnly
                className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none"
              />
            </div>

            {/* Zodiac */}
            <div className="flex items-center mb-4">
              <label className="block text-sm mb-1 w-1/3">Zodiac:</label>
              <input
                type="text"
                defaultValue="Pig"
                readOnly
                className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none"
              />
            </div>

            {/* Height */}
            <div  className="flex items-center mb-4">
              <label className="block text-sm mb-1 w-1/3">Height:</label>
              <input
                type="text"
                defaultValue="175 cm"
                className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Weight */}
            <div  className="flex items-center mb-4">
              <label className="block text-sm mb-1 w-1/3">Weight:</label>
              <input
                type="text"
                defaultValue="69 kg"
                className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
          </form>
        </div>
    </>
  )
}

export default UpdateAbout
