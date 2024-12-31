import React from 'react'
import gallery1 from '../images/gallery-3.jpg'
import gallery2 from '../images/gallery-5.jpg'
import gallery3 from '../images/gallery-6.jpg'
import gallery4 from '../images/gallery-7.jpg'
import gallery5 from '../images/gallery-8.jpg'
import BlackFooter from './BlackFooter'


const ShopGram = () => {
  return (
    <div>
      <div className='text-center'>
            <h1 className='text-4xl mb-4'>Shop Gram</h1>
            <p className='about'>Inspire and let yourself be inspired, from one unique fashion to another.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 m-10 my-10'>
            <div className=' rounded-xl overflow-hidden relative group'>
                <img src={gallery1} alt="" className=' group-hover:scale-110 duration-[3s]' />
            </div>
            <div className=' rounded-xl overflow-hidden relative group'>
                <img src={gallery2} alt="" className=' group-hover:scale-110 duration-[3s]' />
            </div>
            <div className=' rounded-xl overflow-hidden relative group'>
                <img src={gallery3} alt="" className=' group-hover:scale-110 duration-[3s]' />
            </div>
            <div className=' rounded-xl overflow-hidden relative group'>
                <img src={gallery4} alt="" className=' group-hover:scale-110 duration-[3s]' />
            </div>
            <div className=' rounded-xl overflow-hidden relative group'>
                <img src={gallery5} alt="" className=' group-hover:scale-110 duration-[3s]' />
            </div>
        </div>
      <div>
        <BlackFooter/>
      </div>
    </div>
  )
}

export default ShopGram