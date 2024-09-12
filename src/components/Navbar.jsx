import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
        <div className='flex mx-10 sm:mx-16 lg:mx-20 text-3xl mt-5 justify-between items-center'>
            <div className='cursor-pointer'>
                <h1 className='text-4xl'>Logo</h1>
            </div>
            <div className='flex gap-5'>
                <ul className='lg:flex gap-4 text-xl hidden font-normal items-center cursor-pointer'>
                    <li>Biz haqimizda</li>
                    <li>Bosh sahifa</li>
                    <li>Bog'lanish</li>
                    <li>Ustozlar</li>
                </ul>
                <div className='flex items-center text-lg gap-4'>
                    <button className='bg-red-600 px-4 py-2 rounded-lg text-white hover transition-all duration-300'>Registratsiya</button>
                    <button className='bg-blue-600 px-4 py-2 rounded-lg text-white hover transition-all duration-300'>Kirish</button>
                    <button className='text-3xl flex lg:hidden'><GiHamburgerMenu /></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar