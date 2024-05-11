
import Auth from '../Components/Auth'
import Ouote from '../Components/Ouote'

const SignUp = () => {
  return (
    <div className='grid grid-cols-2'>
      <div>
          <Auth type="signup"/>
      </div>
     <div className='invisible lg:visible'>
     <Ouote />
     </div>
    </div>
  )
}

export default SignUp
