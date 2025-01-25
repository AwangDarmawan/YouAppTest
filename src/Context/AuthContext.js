

'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { GetProfile } from '@/services/ProfileApi';
import { GetProfile } from '@/services/ProfileApi'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchProfilContext(storedToken);
    }
  }, []);

  

  const fetchProfilContext = async (token) => {
    const userData = await GetProfile(token);
    if (userData) {
      setUser(userData);
    }
  };

  
 
  

  const Logout = () => {
    console.log('Logging out...');
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, Logout,fetchProfilContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
