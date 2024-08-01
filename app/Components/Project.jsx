import React from 'react'
import './Project.css'

const Project = () => {
  const portfolio = [
    {view:'/images/view.png',link:'https://keyboardlandingpage-codewithshac.netlify.app/' , img :'/images/keyboard.jpg', title :'Keyboard Landingpage' ,tech1:'HTML' , tech2:'CSS'},
    {view:'/images/view.png',link:'https://dictionarycodebyshac.netlify.app/' , img :'/images/dictionary.jpg', title :'Dictionary app' ,tech1:'HTML' , tech2:'CSS' , tech3:'API' , tech4:'J.S'},
    {view:'/images/view.png',link:'https://foodrecipeappcodewithshac.netlify.app/' , img:'https://imgs.search.brave.com/fKAtxBCmCKIn3SRp82gb39SsHdLjb44vb_SIeYoY9xs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/NTU2MTA0Mi9maWxl/L29yaWdpbmFsLTlk/YzEzZWRmNzM2OTdl/ODg3OWJhZDIwOWNh/NmZkMGQ0LnBuZz9y/ZXNpemU9NDAweDA' , title:'Food Recipe app' ,tech1:'HTML' , tech2:'CSS' , tech3:'API' , tech4:'J.S'}
  ]
  return (

    <>
    <div className='flex justify-evenly p-5 flex-wrap object-contain'>
      { portfolio.map((port , index) => (
        <div key={index} className='box' style={{backgroundColor:'#373737',minWidth:'20vw'}}>
 
         <a href={port.link} className='live' target='_blank'>LIVE 
          <img src={port.view} className='h-5 ml-2 mt-1'></img>
          </a>

          <img src={port.img}  className='' style={{minWidth:'20vw',height:'300px'}}></img>
          <h1 className='flex items-center justify-center p-5 text-2xl font-semibold text-white'>{port.title}</h1>
          <ul className='flex p-2'>
              {port.tech1 && <li className='p-2 rounded-lg ml-8' style={{ backgroundColor: '#202020' }}>{port.tech1}</li>}
              {port.tech2 && <li className='p-2 rounded-lg ml-8' style={{ backgroundColor: '#202020' }}>{port.tech2}</li>}
              {port.tech3 && <li className='p-2 rounded-lg ml-8' style={{ backgroundColor: '#202020' }}>{port.tech3}</li>}
              {port.tech4 && <li className='p-2 rounded-lg ml-8' style={{ backgroundColor: '#202020' }}>{port.tech4}</li>}
            </ul>
        </div>

      ))}
    </div>
    

    </>
        
    
  )
}

export default Project
