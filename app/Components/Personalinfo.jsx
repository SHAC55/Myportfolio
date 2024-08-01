import React from 'react'

const Personalinfo = () => {
  return (
    <>

    <div className='flex flex-row mt-5'>
        <span>
        <img className='h-10 mt-1' src='https://cdn-icons-png.flaticon.com/128/3686/3686989.png'></img>
        </span>
        <span className='ml-3'>
            <h1 className='text-gray-400 text-sm'>EMAIL</h1>
            <h2 className='font-semibold '>Shac755@gmail.com</h2>
        </span>
    </div>

    <div className='flex mt-6 mr-6'>
    <span>
        <img className='h-10 mt-1' src='https://cdn-icons-png.flaticon.com/128/5508/5508701.png'></img>
        </span>
        <span className='ml-3'>
            <h1 className='text-gray-400 text-sm'>CONTACT</h1>
            <h2 className='font-semibold '>+91 84510-37216</h2>
        </span>

    </div>

    <div className='flex mt-6 mr-9 '>
    <span>
        <img className='h-10 mt-1' src='https://cdn-icons-png.flaticon.com/128/13012/13012554.png'></img>
        </span>
        <span className='ml-3'>
            <h1 className='text-gray-400 text-sm'>LOCATION</h1>
            <h2 className='font-semibold '>Mumbai || India</h2>
        </span>

    </div>

    </>
  )
}

export default Personalinfo
