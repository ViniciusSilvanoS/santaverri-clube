import React from 'react'
import Button from '../components/Button'
import Logo from '../components/Logo'

const Header = () => {
  return (
    <div className='flex flex-col gap-12 items-center mt-12 lg:flex-row lg:justify-between lg:px-20 lg:mt-8'>
        <Logo />
        <div className='flex flex-col items-center gap-12 lg:flex-row'>
          <p className='text-first-blue text-lg'>Manifesto da marca ></p>
          <div className='flex justify-center gap-4'>
            <a href="https://www.wa.link/ysw0fd" target='_blank'><Button bg={false} className="w-[140px]">Seja PRO</Button></a>
            <a href="https://chat.whatsapp.com/EKd6WF3ErN9IbX9uBwnwH2" target='_blank'><Button>Entrar no clube</Button></a>
          </div>
        </div>
    </div>
  )
}

export default Header