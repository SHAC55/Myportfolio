import React from 'react'

const Education = () => {
     const events = [
        { cllg:'Rizvi college of Engineering',date: '2022 - Current', Grade:'-' },
        { cllg:'MHT-CET',date: '2022', Grade:'49.05%' },
        { cllg:'H.S.C [Science]',date: '2020 - 2022', Grade:'63.17%' },
        { cllg:'S.S.C',date: '-', Grade:'80.40%' },
      ];
  return (
    <>
    <hr className='ml-8 mr-8 mt-16' style={{border:'1px solid gray'}}></hr>

    <div className="flex items-center justify-center  relative p-8 mt-10">

    <div className='p-10 flex flex-col justify-center items-center'>
    <img src='https://cdn-icons-png.flaticon.com/128/16811/16811637.png' className='h-28'></img>
    <span className='text-5xl font-semibold'> Education</span>
    </div>

      <div className="border-l-2 border-gray-200">
        

        {events.map((event, index) => (
          <div key={index} className="mb-8 ml-6 relative">
            <div className="absolute -left-8 top-0 mt-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="pl-4">
            <p className="text-2xl font-semibold">{event.cllg}</p>
              <p className="text-xl text-gray-400">{event.date}</p>
              <p className="mt-1 text-lg font-semibold" style={{color:'#fec94b'}}>{event.Grade}</p>
            </div>

          </div>

        ))}

      </div>
    </div>
    </>
  )
}

export default Education
