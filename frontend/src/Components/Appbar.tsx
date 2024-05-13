import React from 'react'
import { AvatarCard } from './BlogCard'
const Appbar = () => {
  return (
    <div className='border-b border-slate-300 items-center flex justify-around px-4 p-2'>
        <div>
            Medium
        </div>
        <div className='items-center flex justify-center'>
            <AvatarCard firstName="A"/>
        </div>
    </div>
  )
}

export default Appbar
