import React from 'react'

const Coding = () => {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn-icons-png.flaticon.com/128/136/136528.png' },
    { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/128/136/136527.png' },
    { name: 'Tailwind', icon: 'https://img.icons8.com/?size=80&id=WoopfRcDj3RF&format=png' },
    { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png' },
    { name: 'ReactJS', icon: 'https://cdn-icons-png.flaticon.com/128/1126/1126012.png' },
    { name: 'Version Control', icon: 'https://cdn-icons-png.flaticon.com/128/6214/6214162.png' },
    { name: 'Web Dev', icon: 'https://cdn-icons-png.flaticon.com/128/7838/7838457.png' } ,
    { name: 'Responsiveness', icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488732.png' }
  ];
  return (
    <>
       <div className="">
      <div className="flex items-center justify-evenly mt-8 flex-wrap  " >
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-row p-5 m-10 rounded-2xl cursor-pointer hover:bg-neutral-700 transition-all duration-300" style={{border:'1px solid gray',width:'300px'}}>
            <img src={skill.icon} className="flex justify-center items-center h-16" />
            <p className="flex justify-center items-end mt-7 p-3 text-xl font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    <hr className='ml-8 mr-8 mt-16' style={{border:'1px solid gray'}}></hr>

    </>
  )
}

export default Coding
