import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex mx-10 sm:mx-16 lg:mx-20 text-3xl mt-5 justify-between items-center'>
            <div className='cursor-pointer'>
                <h1 className='text-4xl'>Logo</h1>
            </div>
            <div className='flex gap-5'>
                <ul className='flex gap-4 text-xl font-normal items-center cursor-pointer'>
                    <li>Biz haqimizda</li>
                    <li>Bosh sahifa</li>
                    <li>Bog'lanish</li>
                    <li>Ustozlar</li>
                </ul>
                <div className='flex items-start text-lg gap-4'>
                    <button className='bg-red-600 px-4 py-2 rounded-lg text-white hover transition-all duration-300'>Registratsiya</button>
                    <button className='bg-blue-600 px-4 py-2 rounded-lg text-white hover transition-all duration-300'>Kirish</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar