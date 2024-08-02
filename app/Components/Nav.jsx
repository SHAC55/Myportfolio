import React from 'react'
import Link from 'next/link'
import './Nav.css'
const Nav = () => {
  
  return (
    
    <>
    <div className='flex xl:flex-row flex-col-reverse xl:justify-between justify-center '>
        
    <span className=' text-5xl font-semibold p-10'>
         <span className='active'></span>
        <hr className=' w-10 xl:mt-5  mt-11   ' style={{border:'2px solid #ffc359'}}></hr>
    </span>

   

    <ul className='flex items-center justify-center p-5 sm:h-20 xl:rounded-bl-3xl xl:rounded-br-none md:rounded-br-3xl mt-2 xl:mt-0 relative bottom-14 sm:flex-row flex-col h-40 sm:shadow-none shadow-md' style={{backgroundColor:'#373737',width:'540px',minWidth:'506px'   }}>

        <Link className='xl:ml-16 sm:ml-2 text-3xl font-semibold hover:text-gray-400 transition-all duration-200 sm:p-0 p-2 sm:shadow-none shadow-md sm:w-2/4 w-full' href="./">About</Link>

        <Link className='sm:ml-16 text-3xl font-semibold hover:text-gray-400 transition-all duration-200 sm:p-0 p-2 sm:shadow-none shadow-md sm:w-2/4 w-full' href="./Skills">Skills</Link>

        <Link className='sm:ml-16 text-3xl font-semibold hover:text-gray-400 transition-all duration-200 sm:p-0 p-2 sm:shadow-none shadow-md sm:w-2/4 w-full' href="./Portfolio">Portfolio</Link>
        
        {/* <Link className='ml-16 text-3xl font-semibold' href="./Connects">Contact</Link> */}
    </ul>
   
    </div>
    </>
  )
}

export default Nav
