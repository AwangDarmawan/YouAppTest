
import { useProfile } from '@/context/ProfilContext';
import Image from 'next/image';

function CrudAbout() {
  const { profileData, interests, handleFileUpload, handleUpdateProfile, handleOnChange } = useProfile();

  if (!profileData) {
    return <p>Data Failed</p>;
  }
  
  


  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">About</h2>
        <button
          className="text-sm text-darkgold"
          onClick={handleUpdateProfile}
        >
          Save & Update
        </button>
      </div>
      {interests.map((interest, index) => (
      <form className="space-y-4" key={index}>
        
          <div className="flex items-center space-x-4" >
            <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
              <Image
                src={interest.img || "/public/images/dowd.jpg"}
                alt=""
                className="w-full h-full object-cover"
                width={100}  
                height={100}
              />
            </div>
            
            <label className="hover:text-gray-400 text-sm">
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, index)}
                className="hidden"
              />
              Add Image
            </label>
          </div>

          
        {/* Display Name */}
        <div className="flex items-center mb-4">
          <label className="block text-sm w-1/3">Display name:</label>
          <input
            type="text"
            name='name'
            value={profileData.name }
            onChange={handleOnChange}
            className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Gender */}
        <div className="flex items-center mb-4">
          <label className="block text-sm w-1/3">Gender:</label>
          <select
           value={interest.gender }
            onChange={(e) => handleOnChange(e, index)}
           name="gender"
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
            name='birthday'
            value={profileData.birthday}
            onChange={handleOnChange}
            className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Horoscope */}
        <div className="flex items-center mb-4">
          <label className="block text-sm mb-1 w-1/3">Horoscope:</label>
          <input
            type="text"
            name='horoscope'
            value={profileData.horoscope}
            readOnly
            disabled
            className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none"
          />
        </div>
        {/* Zodiac */}
        <div className="flex items-center mb-4">
          <label className="block text-sm mb-1 w-1/3">Zodiac:</label>
          <input
            type="text"
            name='zodiac'
            value={profileData.zodiac }
            readOnly
            disabled
            className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none"
          />
        </div>
        {/* Height */}
        <div className="flex items-center mb-4">
          <label className="block text-sm mb-1 w-1/3">Height:</label>
          <input
            type="number"
            name='height'
            value={profileData.height} 
            onChange={handleOnChange}
            className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
          />
          <span className=" text-white absolute left-50 text-sm">cm</span>
        </div>
        {/* Weight */}
        <div className="flex items-center mb-4">
          <label className="block text-sm mb-1 w-1/3">Weight:</label>
          <input
            type="number"
            value={profileData.weight } 
            onChange={handleOnChange}
            name='weight'
            className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <span className=" text-white absolute left-50 text-sm ">kg</span>
        </div>
      </form>
       ))}
    </div>
  );
}

export default CrudAbout;

