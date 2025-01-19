import axios from "axios";
import { toast } from 'react-toastify';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

/* ============ */
/* === Register=== */
/* ============ */

export const RegisterUser = async (email, username, password) => {
    try {
        const response = await axios.post(`${baseUrl}/api/register`, {
            email: email,
            username: username,
            password: password,
          });
      toast.success(response.data.message);
      console.log("sukses",response.data)
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  /* ============ */
/* === Login=== */
/* ============ */


export const LoginApi = (email, username, password) => {
  return axios.post( `${baseUrl}/api/login`, 
    { email, 
      username, 
      password 
    },
    
    { headers: { "Content-Type": "application/json" } }
  );
};



