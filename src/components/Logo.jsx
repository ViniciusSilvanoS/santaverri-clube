import React from 'react'
import logoSantaverri from '/assets/logo-santaverri.png'

const Logo = ({ color = "black" }) => {
    const textColor = color === "white" ? "text-white" : "text-black";
  return (
    <div className={`flex gap-1 text-base ${textColor}`}>
        <img src={logoSantaverri} alt="Logo do clube de futebol santaverri" />
        <div className='leading-none flex flex-col justify-center'>
            <p className='font-bold'>santaverri</p>
            <p><span className='font-bold'>nec</span> <span className='text-xs text-zinc-400'>clube de fut7</span></p>
        </div>
    </div>
  )
}

export default Logo