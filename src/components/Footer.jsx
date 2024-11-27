import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className='mt-10 h-auto px-10 sm:px-16 lg:px-28 bg-red-300'>
        <div className=' flex justify-between items-center pt-10'>
            <div className='title text-black'>
                <h1 className='text-4xl font-semibold'>NamDU akademik litsey</h1>
                <p className='text-xs pl-[60px] mt-5'>Namangan Davlat Universiteti qoshidagi akademik litsey</p>
                <div className='flex items-center text-lg gap-4 mt-24'>
                    <button className='bg-red-600 px-4 py-2 rounded-lg text-white hover transition-all duration-300'>Saytni O'rganish</button>
                    <button className='bg-blue-600 px-4 py-2 rounded-lg text-white hover transition-all duration-300'>Fikrlar uchun</button>
                </div>
            </div>
            <div>
            <ul className='flex flex-col gap-4 text-xl  justify-start font-normal items-start cursor-pointer'>
                    <h1 className='text-3xl font-semibold text-start'>Ma'lumotlar:</h1>
                    <li><label htmlFor="">Manzil:</label> Boburshoh ko'chasi 4-uy</li>
                    <li><label htmlFor="">Ta'lim:</label> 2 yillik intensiv o'qitish</li>
                    <li><label htmlFor="">Qulayliklar:</label> Shinam yotoqxona va taomlar</li>
                    <li><label htmlFor="">O'qish kunlari: </label>6 kunlik o'qitish tizimi</li>
                </ul>
            </div>
            <div className='contact flex text-lg flex-col gap-10'>
                <h1 className='text-3xl font-semibold'>Biz bilan bog'laning</h1>
                <div className="flex items-center gap-4">
                    <FaInstagram />
                    <p>@1smo1lov1c</p>
                </div>
                <div className="flex items-center gap-4">
                    <FaTelegram />
                    <p>@NamDUakademiklitseyi</p>
                </div>
                <div className="flex gap-4">
                    <FaXTwitter />
                    <p>@NamDU_akademik_litsey</p>
                </div>
            </div>
        </div>
        <hr className='mt-10'/>
        <center><h1 className='pt-4'>Abdulazizbek tomonidan yaratildi</h1></center>
        </div>
    </>
  )
}

export default Footer