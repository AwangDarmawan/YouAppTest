'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/Context/AuthContext';
import { updateProfile } from '@/Services/ProfileApi';

function CrudAbout() {
  const { token, user, fetchProfilContext } = useAuth();
  const [interests, setInterests] = useState([]);
  const [profileData, setProfileData] = useState({
    name: '',
    birthday: '',
    height: '',
    weight: '',
    horoscope: '',
    zodiac: '',
    interests: []
  });


  

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name,
        birthday: user.birthday,
        height: user.height,
        weight: user.weight,
        interests: user.interests,
        horoscope: user.horoscope,
        zodiac: user.zodiac
      });

      const formattedInterests = [];
      for (let i = 0; i < user.interests.length; i += 2) {
        formattedInterests.push({
          gender: user.interests[i],
          img: user.interests[i + 1],
        });
      }
      setInterests(formattedInterests);
    }
  }, [user]);

  const handleFileUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImgUrl = URL.createObjectURL(file);
      setInterests((prevInterests) => {
        const updatedInterests = [...prevInterests];
        updatedInterests[index].img = newImgUrl;
        return updatedInterests;
      });
    }
  };

  // const handleBirthdayChange = (date) => {
  //   setProfileData((prevData) => ({
  //     ...prevData,
  //     birthday: date,
  //     horoscope: getHoroscope(date),
  //     zodiac: getZodiac(date)
  //   }));
  // };

  const getHoroscope = (birthday) => {
    const date = new Date(birthday);
    const month = date.getMonth() + 1; // months are 0-indexed
    const day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'Libra';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';

    return 'Unknown'; // Fallback if something goes wrong
  };

  const getZodiac = (birthday) => {
    const date = new Date(birthday);
    const year = date.getFullYear();
    const chineseZodiac = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];
    return chineseZodiac[year % 12];
  };

  useEffect(() => {
    if (!user && token) {
      fetchProfilContext(token);
    }
  }, [user, token, fetchProfilContext]);

  const handleUpdateProfile = async () => {
    // Pastikan height dan weight diubah menjadi angka
    const height = parseFloat(profileData.height);
    const weight = parseFloat(profileData.weight);

    // Periksa apakah height dan weight valid
    if (isNaN(height) || isNaN(weight)) {
      alert("Please enter valid numbers for height and weight.");
      return;
    }

    const updatedProfile = {
      ...profileData,
      height: height,  // Memastikan height adalah angka
      weight: weight,  // Memastikan weight adalah angka
      interests: interests.flatMap(i => [i.gender, i.img]),
    };

    console.log('Sending updated profile:', updatedProfile);

      const updatedData = await updateProfile(token, updatedProfile);
      console.log('Profile updated:', updatedData);
      fetchProfilContext(token); 
  }
  if (!user) {
    return <p>Data Failed</p>;
  }


  const handleOnChange = (e, index) => {
    const { name, value } = e.target;
  
    if (name === "gender") {
      setInterests((prevInterests) => {
        const updatedInterests = [...prevInterests];
        updatedInterests[index].gender = value; // Update gender
        return updatedInterests;
      });
    } else if (name === "birthday") {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: value,
        horoscope: getHoroscope(value), 
        zodiac: getZodiac(value), 
      }));
    } else {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  


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
              <img
                src={interest.img}
                alt="ss"
                className="w-full h-full object-cover"
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
            value={profileData.name}
            onChange={handleOnChange}
            className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Gender */}
        <div className="flex items-center mb-4">
          <label className="block text-sm w-1/3">Gender:</label>
          <select
           value={interest.gender}
          onChange={(e) => handleOnChange(e, index)} // Pass index untuk mengetahui element yang sedang diubah
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
            value={profileData.zodiac}
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
          <span className="ml-2 text-white absolute left-50 text-sm">cm</span>
        </div>
        {/* Weight */}
        <div className="flex items-center mb-4">
          <label className="block text-sm mb-1 w-1/3">Weight:</label>
          <input
            type="number"
            value={profileData.weight} 
            onChange={handleOnChange}
            name='weight'
            className="w-2/3 bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <span className="ml-2 text-white absolute left-50 text-sm ">kg</span>
        </div>
      </form>
       ))}
    </div>
  );
}

export default CrudAbout;
