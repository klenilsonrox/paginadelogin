'use client'
import Link from 'next/link'
import React from 'react'
import { FaUser } from "react-icons/fa";

const Header = () => {
const [menu,setOpenMenu]=React.useState(false)



  return (
    <header className='bg-[#121214] w-screen py-6'>
      <nav className='max-w-7xl mx-auto flex items-center justify-between'>
        <button className='absolute right-4 text-white' onClick={()=>setOpenMenu(!menu)}>Menu</button>
        <h1 className='text-white'>logo</h1>
        {menu && <ul className={`flex text-gray-300 animaMenu gap-1 transition-all flex-col absolute top-[70px] right-0 lg:flex-row lg:sticky overflow-hidden bg-[#374151] ${menu ? "h-screen":"h-0"} py-2 z-10 bottom-0 items-center lg:items-start left-0`}>
            <li onClick={()=>setOpenMenu(false)} className='hover:bg-gray-700 px-4 rounded-md py-2 transition-all'><Link href="/" className='hover:text-white'>Inicio</Link></li>
            <li onClick={()=>setOpenMenu(false)} className='hover:bg-gray-700 px-4 rounded-md py-2 transition-all'><Link href="/sobre" className='hover:text-white'>Sobre nós</Link></li>
            <li onClick={()=>setOpenMenu(false)} className='hover:bg-gray-700 px-4 rounded-md py-2 transition-all'><Link href="/contato" className='hover:text-white'>contato</Link></li>
            <li onClick={()=>setOpenMenu(false)} className='hover:bg-gray-700 px-4 rounded-md py-2 transition-all border border-[#9956F6]'><Link href="/login" className='hover:text-white flex items-center justify-between gap-2 max-w-[150px]'><FaUser className='text-[#9956F6]'/> FAZER LOGIN</Link></li>
        </ul>}
      </nav>
    </header>
  )
}

export default Header
