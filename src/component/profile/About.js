

function About() {
  return (
    <>
   
  {/* <!-- About Section --> */}
  <div className="bg-gray-800 rounded-lg px-4 py-5">
    <div className="flex justify-between items-center">
      <h2 className="text-sm font-medium">About</h2>
      <button>
      <img src="/images/Arah.svg" alt="..." className="text-white"/>
      </button>
    </div>
    <p className="text-sm text-gray-400 mt-6">
      Add in your about to help others know you better
    </p>
  </div>

  {/* <!-- Interest Section --> */}
  <div className="bg-gray-800 rounded-lg px-4 py-5">
    <div className="flex justify-between items-center">
      <h2 className="text-sm font-medium">Interest</h2>
      <button>
      <img src="/images/Arah.svg" alt="..." className="text-white"/>
      </button>
    </div>
    <p class="text-sm text-gray-400 mt-6">
      Add in your interest to find a better match
    </p>
  </div>
    </>
  )
}

export default About
