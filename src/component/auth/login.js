

'use client';
import Link from 'next/link';
import Back from '@/component/profile/back';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeSlash } from 'phosphor-react';

import { useAuth } from '@/context/AuthContext';

import { LoginApi } from '@/services/AuthApi';


function Login() {
  const {setToken } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();



 

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await loginContext(email, username, password)
  
   
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginApi(email, username, password);
       console.log('Response:', response.data);
      if (response.status && response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        setToken(response.data.access_token);
        toast.success(response.data.message);
        router.push('/profile');
      } else {
        toast.error(response.data.message || 'Login gagal!');
      }
    } catch (error) {
      toast.error("terjadi kesalahan")
      console.error('Login Error:', error.response?.data || error.message);
    }
  };
  

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-md mx-auto space-y-6">
          <Back />
          <div className="bg-transparent rounded-lg shadow-lg p-2 w-full max-w-md">
            <h1 className="text-xl font-bold text-white my-6">Login</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                className="bg-transparent border border-gray-300 text-white rounded-lg h-12 px-2 text-sm"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="text"
                name="username"
                className="bg-transparent border border-gray-300 text-white rounded-lg h-12 px-2 text-sm"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <div className="flex flex-row relative justify-between">
                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-transparent border border-gray-300 rounded-lg h-12 px-3 w-full text-white text-sm"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className="icon-show absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}>{showPassword ? 
                    <Eye size={25} /> : <EyeSlash size={25} />}
                </i>
              </div>

              <button
                type="submit"
                className="text-white bg-bluewarna rounded-lg h-12 w-full"
              >
                Login
              </button>

              <p className="text-sm font-light text-gray-500 flex justify-center">
                No account?{' '}
                <Link href="/register/" className="text-darkgold underline">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
