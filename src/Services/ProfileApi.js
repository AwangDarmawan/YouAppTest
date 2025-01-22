import axios from "axios";

import { toast } from 'react-toastify';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;



 /* ============ */
/* === get Profile=== */
/* ============ */
export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${baseUrl}/api/getProfile`, {
      headers: {
        'accept': '*/*',
        'x-access-token': token,
      },
    });
    if (response.status === 200) {
      console.log("response profiles", response.data.data);
      toast.success(response.data.data)
      return response.data.data;
      
    } else {
      toast.error(response.data.data)
      console.error('Failed to fetch user profile:', response.data.message);
    }
  } catch (error) {
    toast.error(error)
    console.error('Error fetching user profile:', error);
  }
};



/* ============ */
/* === Update Profil=== */
/* ============ */
export const updateProfile = async (token, profileData) => {
  try {
    const response = await axios.put(
      `${baseUrl}/api/updateProfile`,
      profileData,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      }
    );
    toast.success(response.data)
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    toast.error(error)
    throw error;
  }
};



 /* ============ */
/* === create Profil=== */
/* ============ */

// export const createProfile = async (token, profileData) => {
//   try {
//     const response = await axios.post(
//       `${baseUrl}/api/createProfile`,
//       profileData,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'x-access-token': token,
//         }
//       }
//     );
//     toast.success(response.data.message);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating profile:', error);
//     toast.error('Error creating profile');
//     throw error;
//   }
// };
