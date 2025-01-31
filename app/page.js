import React from 'react'
import Nav from './Components/Nav'
import Profile from './Components/Profile'
import Personalinfo from './Components/Personalinfo'
import Downloadcv from './Components/Downloadcv'
import Intro from './Components/Intro'
import Education from './Components/Education'
import Socialmedia from './Components/Socialmedia'


const page = () => {
  return (
    <div className='flex xl:flex-row flex-col items-center xl:items-start p-10'>
         
      {/* lhs */}
      <div className='flex flex-col items-center p-3 rounded-3xl ' style={{backgroundColor:'#1e1e1e',width:'330px', height:'845px'}}>

        <Profile/>
        <Personalinfo/>
        <Socialmedia/>
        <Downloadcv/>
      
      </div>

      {/* rhs */}
      <div className='ml-3 md:ml-10 rounded-3xl overflow-y-scroll mt-10 xl:mt-0 scrollbar-hide' style={{backgroundColor:'#1e1e1e' , width:'90vw',height:'845px',minWidth:'370px'}}>
        

        <div>
        <span className='relative xl:top-8 sm:top-40 top-52 left-8 text-5xl '>ABOUT US</span>
        <Nav/>
        </div>

        <div className='w-full'>
          <Intro/>
        </div>

        <div>
          <Education/>
        </div>
        
      </div>
      
    </div>
  )
}

export default page
