import React from 'react'
import './Downloadcv.css'

const Downloadcv = () => {
  return (
    <a href="./files/SHAC RESUME.pdf" download>
    <button className='mt-8 p-4 rounded-2xl text-black font-bold bg-white' >
        DOWNLOAD CV
    </button>
    </a>
  )
}

export default Downloadcv
