import React from 'react'
import { ImRainsense } from '../assets/images'

function Header() {
  return (
    <div className='h-[62px] w-full py-1 px-4'>
        <img src={ImRainsense} alt="" className='h-[50px] w-[150px]'/>
    </div>
  )
}

export default Header