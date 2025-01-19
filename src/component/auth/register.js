'use client'; 
import Link from "next/link"
import Back from "../Profile/Back"
import { useState } from 'react';
import { RegisterUser } from "@/Services/AuthApi";
import { Eye, EyeSlash } from 'phosphor-react';
import { toast } from 'react-toastify';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showconf, setShowconf] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confpassword) {
        toast.error("Password dan konfirmasi password tidak sama");
        return;
      }
    await RegisterUser(email, username, password);
  };
  return (
    <>
        <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-md mx-auto space-y-6">
        <Back/>
            <div className="bg-transparent rounded-lg shadow-lg p-3 w-full max-w-md">
           
            <h1 className="text-xl font-bold text-white my-6 ">Register</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                type="email"
                className="bg-transparent border border-gray-300 text-white rounded-lg h-12 px-3 w-full text-sm"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                type="text"
                className="bg-transparent border border-gray-300 text-white rounded-lg h-12 px-3 w-full text-sm"
                placeholder="Create Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />

                <div className="flex flex-row relative justify-between">
                <input
                type={showPassword ? "text" : "password"}
                className=" bg-transparent border border-gray-300  rounded-lg h-12 px-3 w-full text-white text-sm"
                name="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                 <i className="icon-show absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 
                 <Eye size={25} /> : <EyeSlash size={25} />}</i>
                </div>


                <div className="flex flex-row relative justify-between ">
                <input
                type={showconf ? "text" : "password"}
                className=" bg-transparent border border-gray-300  rounded-lg h-12 px-3 w-full text-white text-sm relative"
                name="password"
                placeholder="Conf Password"
                value={confpassword}
                onChange={(e) => setConfPassword(e.target.value)}
                required
                />
                 <p className="icon-show absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowconf(!showconf)}>{showconf ? <Eye size={25} /> : <EyeSlash size={25} />}</p>
                </div>

                <button className='text-white bg-bluewarna rounded-lg h-12 px-3 w-full ' type="submit">Register</button>
                
                <p className="text-sm font-light text-gray-500 flex justify-center ">
                Have an account? 
                <Link
                    href="/"
                    className='text-darkgold underline'
                >
                    Login here
                </Link>
                </p>
               
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
