import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { userAuth } from '../helping/Authcontextprovider';

export const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {signinUser} = userAuth();
  const handleSignUp = async(e) => {

    e.preventDefault()

    if(password.length < 8) {
      alert('password length should be more than 8 ')
    }else{
      await signinUser(email,password);
      navigate('/');
    }
  }

  return (
    <div className='mt-10 flex justify-center '> 

      <form 
          onSubmit = {handleSignUp}
          className='flex flex-col text-white box-border w-[70%] bg-black/80  px-5 py-3 sm:px-8 sm:py-16 md:w-[450px] md:px-10 md:py-[10vh]  gap-10'>
            
            <h1 className='text-xl sm:text-2xl md:text-4xl font-extrabold antialiased'>Sign In</h1>
            <input 
            onChange={(e) => setEmail(e.target.value)} 
            className='bg-gray-600 px-2 py-4  w-full focus:outline-none'
            type="email" 
            placeholder='Email' />


            <input 
            onChange={(e) => setPassword(e.target.value)} 
            className='bg-gray-600 px-2 py-4 w-full focus:outline-none'
            value={password} 
            type="password" 
            placeholder='Password' />
            <button type='submit' className='bg-red-600 w-full py-4 mt-5'>Sign In</button> 

           
            <p className='text-white/80'>Already signed up to Crypto <Link to='/signup' className='text-blue-500 hover:text-blue-800'>SignUp</Link> </p>
            <p className='font-light text-gray-600 '>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#' className='text-blue-500 hover:text-blue-800'>Learn more</a></p>
        </form>

    </div>
  )
}
