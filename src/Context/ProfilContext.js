'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getProfile, updateProfile } from '@/Services/ProfileApi';
import { useAuth } from './AuthContext';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { token } = useAuth();
  const [profileData, setProfileData] = useState(null);

  // Fetch profile data when the token is available
  useEffect(() => {
    if (token) {
      fetchProfile(token);
    }
  }, [token]);

  const fetchProfile = async (token) => {
    try {
      const data = await getProfile(token);
      if (data) {
        setProfileData(data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const updateUserProfile = async (updatedProfile) => {
    try {
      const updatedData = await updateProfile(token, updatedProfile);
      setProfileData(updatedData); // Update the profile data in state
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData, updateUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use Profile Context
export const useProfile = () => useContext(ProfileContext);
