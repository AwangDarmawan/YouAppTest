'use client'; 

import { useRouter } from 'next/navigation';

function Back() {
    const router = useRouter();
  return (
    <>
        
        <button 
        onClick={() => router.back()}
        className="text-sm text-gray-400 hover:text-gray-200"
        >Back</button>
          
           
            
    </>
  )
}

export default Back
