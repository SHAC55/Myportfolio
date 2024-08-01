import React from 'react'
import Link from 'next/link'
const Nav = () => {
  const active = () => {

  }
  return (
    
    <>
    <div className='flex justify-between'>
        
    <span className=' text-5xl font-semibold p-10'>
         <span className='active'></span>
        <hr className='w-10 mt-5' style={{border:'2px solid #ffc359'}}></hr>
    </span>

    <ul className='flex items-center p-5 h-20 rounded-bl-3xl relative bottom-12' style={{backgroundColor:'#373737',width:'570px'   }}>
        <Link className='ml-16 text-3xl font-semibold hover:text-gray-400 transition-all duration-200 ' href="./">About</Link>
        <Link className='ml-16 text-3xl font-semibold hover:text-gray-400 transition-all duration-200 ' href="./Skills">Skills</Link>
        <Link className='ml-16 text-3xl font-semibold hover:text-gray-400 transition-all duration-200 ' href="./Portfolio">Portfolio</Link>
        {/* <Link className='ml-16 text-3xl font-semibold' href="./Connects">Contact</Link> */}
    </ul>
   
    </div>
    </>
  )
}

export default Nav
