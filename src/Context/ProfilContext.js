"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
// import { updateProfile } from '@/services/ProfileApi';
import { updateProfile } from 'src/services/ProfileApi';
import { useAuth } from '@/context/AuthContext';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
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
      console.log('User data:', user);
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

  const getHoroscope = (birthday) => {
    const date = new Date(birthday);
    const month = date.getMonth() + 1; 
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

    return 'Unknown'; 
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
    const height = parseFloat(profileData.height);
    const weight = parseFloat(profileData.weight);

    if (isNaN(height) || isNaN(weight)) {
      alert("Please enter valid numbers for height and weight.");
      return;
    }

    const updatedProfile = {
      ...profileData,
      height: height,  
      weight: weight,  
      interests: interests.flatMap(i => [i.gender, i.img]),
    };

    const updatedData= await updateProfile(token, updatedProfile);
    console.log("data update",updatedData )
    fetchProfilContext(token); 
  };

  const updateNull = async () => {
    const height = parseFloat(profileData.height);
    const weight = parseFloat(profileData.weight);
  
    if (isNaN(height)) {
      profileData.height = 170; 
    }
    if (isNaN(weight)) {
      profileData.weight = 60;  
    }
  
    const updatedProfile = {
      name: profileData.name || "isi Nama",
      birthday: profileData.birthday || "2002-02-01",
      height: profileData.height || 160,
      weight: profileData.weight || 50,
      horoscope: profileData.horoscope || "",
      zodiac: profileData.zodiac || "",
      interests: interests.length > 0 ? interests.flatMap(i => 
      [i.gender, i.img,i.hobi]) : ["Male", "https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-plus-icon-png-image_1025536.jpg",],
    };
  
    console.log('Data yang akan dikirim:', updatedProfile);
  
    try {
      const updatedData = await updateProfile(token, updatedProfile);
      console.log('Profil berhasil diperbarui:', updatedData);
      fetchProfilContext(token);  
    } catch (error) {
      console.error('Terjadi kesalahan saat memperbarui profil:', error);
      
    }
  };
  
  const handleOnChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "gender") {
      setInterests((prevInterests) => {
        const updatedInterests = [...prevInterests];
        updatedInterests[index].gender = value; 
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
    <ProfileContext.Provider
      value={{
        profileData,
        interests,
        handleFileUpload,
        handleUpdateProfile,
        handleOnChange,
        updateNull,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
