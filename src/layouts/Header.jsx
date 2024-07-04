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
            <a href="https://www.wa.link/ysw0fd"><Button bg={false} className="w-[140px]">Seja PRO</Button></a>
            <Button>Entrar no clube</Button> 
          </div>
        </div>
    </div>
  )
}

export default Header