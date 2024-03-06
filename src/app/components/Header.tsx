import Link from 'next/link'
import React from 'react'
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-[#121214] w-screen py-6'>
      <nav className='max-w-7xl mx-auto flex items-center justify-between'>
        <h1 className='text-white'>logo</h1>
        <ul className='flex text-gray-300 relative gap-1'>
            <li className='hover:bg-gray-700 px-4 rounded-md py-2 transition-all'><Link href="/" className='hover:text-white'>Inicio</Link></li>
            <li className='hover:bg-gray-700 px-4 rounded-md py-2 transition-all'><Link href="/sobre" className='hover:text-white'>Sobre nós</Link></li>
            <li className='hover:bg-gray-700 px-4 rounded-md py-2 transition-all'><Link href="/contato" className='hover:text-white'>contato</Link></li>
            <li className='hover:bg-gray-700 px-4 rounded-md py-2 transition-all border border-[#9956F6]'><Link href="/login" className='hover:text-white flex items-center justify-between gap-2 '><FaUser className='text-[#9956F6]'/> FAZER LOGIN</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
