import React from 'react'

const Profile = () => {
  return (
    <>
        <img className=' flex h-72 ' src="./images/myself.jpeg"></img>
        <span className='text-3xl font-semibold mt-5'> Saif Chaudhary</span>
        <span className='mt-5 text-xl p-3 rounded-lg' style={{backgroundColor:'#333333'}}>Web Developer</span>
        <span className='mt-5' style={{border:'1px solid grey', width:'290px'}}></span>
        </>
  )
}

export default Profile
