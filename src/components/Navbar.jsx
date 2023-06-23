import React, { useEffect, useState } from 'react'
import { toggleMode } from '../helping/Themecontextprovider'
import { Link } from 'react-router-dom'
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/Bs'
import  {FaHamburger} from 'react-icons/Fa'
import { RxCross1 } from 'react-icons/Rx'
import { useNavigate } from 'react-router-dom'
import { getHamburgerContext } from '../helping/Hamburgerontextprovider'
import { userAuth } from '../helping/Authcontextprovider'
export const Navbar = () => {

  const navigate = useNavigate()
 const getCurrentWidth = () => {
  return window.innerWidth;
 }
  const {darkmode,changeMode} = toggleMode()
  const {hamburger,setHamburger}= getHamburgerContext()
  const [screenwidth,setScreenWidth] = useState(getCurrentWidth())
  const {user,logoutUser} = userAuth();

  useEffect(() => {
    const getScreenWidth = () => {
      setScreenWidth((w) => getCurrentWidth())
    }
    window.addEventListener("resize",getScreenWidth)

    return () => (
      window.removeEventListener("resize",getScreenWidth)
    )
  },[screenwidth])

  return (
    <div className={`${darkmode ? "dark" : "light"}`}> 
        <nav className='rounded-div flex justify-between items-center h-10 md:h-20 sm:text-md md:text-lg lg:text-xl antialiased font-bold'>

           { 
           (screenwidth > 414)  ? 
           // True condition
           ( <> 
                  <button onClick={changeMode} className='order-1'> 
                    {
                      darkmode ? (<> <BsFillSunFill className='inline mr-2'/> Light</>) : (<> <BsFillMoonStarsFill className='inline mr-2'/> Dark</>)
                    }
                    </button>

                    {
                      (user == null) ? (
                        <div className='flex gap-x-3 rounded-xl order-10'>
                            <Link to='/signin'> <button className=' hover:opacity-50'>SignIn</button></Link>
                            <Link to='/signup'><button className='bg-button text-btnText rounded-2xl px-2 md:px-4 py-1 hover:opacity-50'>Sign Up</button></Link>
                        </div>
                        ):(
                          <div className='flex gap-x-3 rounded-xl order-10'>
                            <Link to='/account'> <button className=' hover:opacity-50'>Account</button></Link>
                            <Link to='/'><button onClick={logoutUser}  className='bg-button text-btnText rounded-2xl px-2 md:px-4 py-1 hover:opacity-50'>LogOut</button></Link>
                          </div>
                          )
                    }
             </> )
       
            : //false
         (          
              <div className='order-10'>
                    {
                      hamburger  ? 
                        ( <button onClick={() => {
                            setHamburger((ham) => !ham);
                            navigate('/sidebar')}}>
                            <FaHamburger/>
                          </button>
                        )
                      : ( <button onClick={() => {
                            setHamburger((ham) => !ham);
                            navigate('/')}}>
                            <RxCross1/>
                          </button>
                        )
                    }
              </div>  
          )
         } 
          
          <Link to='/' className='order-2 text-xl md:text-2xl lg:text-3xl'>Crypto base</Link>
         
        </nav>
    </div>
 )
}