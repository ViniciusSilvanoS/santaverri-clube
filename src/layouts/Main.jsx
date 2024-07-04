import React from 'react'
import Button from '../components/Button'
import trius from '/assets/supernova.png'
import supernova from '/assets/trius.png'
import quadraTrofeu from '/assets/quadra-trofeu.png'

const Main = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:h-full lg:mx-20'>
        <div className='flex flex-col gap-8 items-center px-6 lg:items-start lg:gap-14 lg:w-4/5 lg:m-auto'>
          <div className='text-first-blue text-3xl text-center font-bold lg:text-5xl xl:text-7xl lg:text-left'>
              <h1 className=''>Jogos de FUT7</h1>
              <h1 className=''>Quintas e Domingos</h1>
          </div>
          <p className='text-xl text-center font-medium lg:text-left'> O clube de FUT7 amador que mais cresce em Porto Alegre.</p>
          <a href=""><Button>Entrar no clube</Button></a>
          <div className='flex gap-8'>
              <img src={supernova} alt="Logo da empresa Supernova" />
              <img src={trius} alt="Logo da empresa Trius" />
          </div>
        </div>
        <div className='m-auto'>
          <img src={quadraTrofeu} className='sm:max-w-[527px] lg:max-w-none lg:w-full' alt="Ilustração de uma quadra e um troféu com uma bola dentro" />
        </div>
    </div>
  )
}

export default Main