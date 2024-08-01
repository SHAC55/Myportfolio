import React from 'react'


const Socialmedia = () => {
  return (
    <>
    <hr className='mt-7' style={{border:'1px solid grey',width:'290px'}}></hr>

    <div className='flex mt-6'>
      <a href='https://www.linkedin.com/in/saif-chaudhary-07621b221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>
      <img src='https://cdn-icons-png.flaticon.com/128/3991/3991775.png' className='h-10 hover:scale-110 transition-all duration-300'>
      </img></a>

      <a href='https://github.com/dashboard' target='_blank'>
      <img src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png' className='h-10 ml-8 mr-8 hover:scale-110 transition-all duration-300'>
      </img></a>
      
      <a href='https://www.instagram.com/shac_55?igsh=MXZxZXVueHA4OWtjbg==' target='_blank'>
      <img src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png'className='h-10 hover:scale-110 transition-all duration-300'>
      </img></a>
      
    </div>
    </>
  )
}

export default Socialmedia
