import Link from "next/link"
import { useProfile } from '@/context/ProfilContext';
import Image from 'next/image';

function About() {
  const { profileData,updateNull} = useProfile();

  
  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(profileData.birthday);
  
    if (!profileData) {
      return <p>Data Failed</p>;
    }


  return (
    <>
   
  {/* <!-- About Section --> */}
  <div className="bg-gray-800 rounded-lg px-4 py-5">
    <div className="flex justify-between items-center">
      <h2 className="text-sm font-medium">About</h2>
      <Link 
       onClick={updateNull}
        href="/updateprofile">         
      {/* <Image src="/images/Arah.svg" alt="..." 
    
      className='hover:text-darkgold underline'/> */}
       <Image src="/images/Arah.svg" alt="Update Profile" width={20} height={20} className="hover:text-darkgold underline" />
      </Link>
    </div>
    <div className="text-sm text-gray-400 mt-6">
    <label className="flex gap-2 my-3">Birthday: 
    <p className="text-white">{profileData.birthday} (Age {age})</p></label>
    <label className="flex gap-2 my-3">Horoscope: 
    <p className="text-white">{profileData.horoscope}</p></label>
    <label className="flex gap-2 my-3">Zodiac: 
    <p className="text-white">{profileData.zodiac}</p></label>
    <label className="flex gap-2 my-3">Height: 
    <p className="text-white">{profileData.height} cm</p></label>
    <label className="flex gap-2 my-3">Weight: 
    <p className="text-white">{profileData.weight} kg</p></label>
    </div>
    
    <p className="text-sm text-gray-400 mt-6">
      Add in your about to help others know you better
    </p>
  </div>

  
    </>
  )
}

export default About
