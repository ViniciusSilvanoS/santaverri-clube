import React from 'react'
import santaverrinec from "/assets/logo-santaverri-nec-white.png"
import Logo from '../components/Logo'

const Footer = () => {
  return (
    <div className='bg-black px-6 py-12 flex flex-col gap-7 text-lg font-medium lg:flex-row lg:p-24 lg:justify-between'>
        <div className='flex flex-col gap-4'>
          <Logo color='white' />
          <p className='text-color-gray'>O maior clube de Futebol 7 da PUCRS</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-white text-xl'>Faça parte</p>
          <p className='text-color-gray'>Sobre a gente</p>
          <p className='text-color-gray'>Manifesto da marca</p>
          <p className='text-color-gray'>Transparência</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-white text-xl'>Seja PRO</p>
          <p className='text-color-gray'>Assinatura</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-white text-xl'>Produtos</p>
          <p className='text-color-gray'>Manto do clube</p>
        </div> 
        <div className='flex flex-col gap-2'>
          <p className='text-white text-xl'>Imprensa</p>
          <p className='text-color-gray'>Material de brand</p>
          <p className='text-color-gray'>Patrocínios</p>
        </div>
    </div>
  )
}

export default Footer