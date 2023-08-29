import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import loading from '../public/loading.svg'

function LoadingPage() {
  return (
    <div>
      <Navbar />
      <div  style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://ik.imagekit.io/krs/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305_Zvo6r_YVb.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1659951383753)`,
          }} className="flex justify-center items-center w-full h-screen text-yellow-500 bg-cover bg-left  "><img className='h-56 w-56' src={loading}/></div>
      <Footer />
    </div>
  )
}

export default LoadingPage