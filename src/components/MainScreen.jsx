import React from 'react'
import human from '../img/human.png'

const MainScreen = () => {
  return (
    <>
        <div className='mx-10 sm:mx-16 lg:mx-28 mt-10 flex gap-16 justify-between items-center'>
            <div className='flex flex-col gap-9'>
                <div>
                    <h1 className='text-5xl font-bold'>NamDU Akademik Litsey</h1>
                    <h3 className='text-sm text-end mt-3'>Namangan Davlat Universiteti qoshidagi akademik litsey</h3>
                </div>
                <p className='text-lg font-medium mt-16'>NamDu akademik litseyi sizga 2 yil davomida siz tanlagan yo'nalish <br /> bo'yicha intensiv ravishda taxsil olishda qo'ldan kelgancha yordamlashadi. <br /> Buning yaqqol isboti bizning litseyni yillar davomida bitirib kelayotgan <br />o'quvchilarning erishgan yutuqlarida namoyon boladi </p>
                <div className='flex items-center text-lg gap-4'>
                    <button className='bg-red-600 px-4 py-2 rounded-lg text-white hover transition-all duration-300'>Saytni O'rganish</button>
                    <button className='bg-blue-600 px-4 py-2 rounded-lg text-white hover transition-all duration-300'>Fikrlar uchun</button>
                </div>
            </div>
            <div>
                <img className='h-[500px]' src={human} alt="" />
            </div>
        </div>
    </>
  )
}

export default MainScreen