import React from 'react'
import Auth from '../Components/Auth'
import Ouote from '../Components/Ouote'

const SignIn = () => {
  return (
    <div className='grid grid-cols-2'>
    <div>
        <Auth type="signin"/>
    </div>
   <div className='invisible lg:visible'>
   <Ouote />
   </div>
  </div>
  )
}

export default SignIn
