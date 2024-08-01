import React from 'react'

const Experience = () => {
    const exp = [
        {company:'Prodiy Infotech',date:'Aug 2024',role:'Web Developer ( Intern )'},
        {company:'Sheryian Coding ',date:'July 2024',role:'Front-end Hackathon'}
    ]
  return (
    <>
    
    <div className="flex items-center justify-center  relative p-8 mt-10">

      <div className='p-10 mb-5 flex flex-col justify-center items-center'>
      <img src='https://cdn-icons-png.flaticon.com/128/8078/8078678.png' className='h-24 pr-3'></img>
      <div className='text-5xl font-semibold pr-8 mt-4'>Experience 
      </div>

      </div>

      <div className="border-l-2 border-gray-200">
    {exp.map((ex , i) => (
        <div key={i} className="mb-8 ml-6 relative">
            <div className="absolute -left-8 top-0 mt-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="pl-4">

            <h1 className="text-2xl font-semibold">{ex.company}</h1>
            <h2 className="text-xl text-gray-400">{ex.date}</h2>
            <h3 className="mt-1 text-lg font-semibold" style={{color:'#fec94b'}}>{ex.role}</h3>


            </div>
        </div>
    ))}
    </div>
      
    </div>
    </>
  )
}

export default Experience
