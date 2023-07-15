import React from 'react'
import {AiFillInstagram,AiOutlineMail,AiFillFacebook} from 'react-icons/Ai'
import {FaTwitterSquare,FaLinkedin} from 'react-icons/Fa'

export const Footer = () => {
  return (
    <div className='rounded-div mt-2 pt-5 pb-10 flex flex-col items-center gap-y-10 md:flex-row md:justify-between antialiased'>
      <div className='flex gap-x-12 md:ml-10 text-md font-normal'>
        <section>
            <h3 className='text-2xl mb-4 tracking-widest'><b>SUPPORT</b></h3>
            <div className='flex flex-col gap-y-4 text-xs font-light'>
                <div>HELP CENTER</div>
                <div>CONTACT US</div>
                <div>API STATUS</div>
                <div>DOCUMENTATION</div>
            </div>
        </section>
        <section>
            <h3 className='text-xl mb-4 tracking-widest'><b>INFO</b></h3>
            <div className='flex flex-col gap-y-4 text-xs font-light'>
              <div>ABOUT US</div>
              <div>CAREERS</div>
              <div>INVEST ON US</div>
              <div>LEGALS</div>
            </div>
        </section>
      </div>

       <div className='flex flex-col w-full md:w-fit md:text-start text-center md:mr-10 text-2xl'>
          <b className='text-2xl'>Sign Up For Crypto News</b>
          
          <div className='mt-5 flex flex-col md:flex-row gap-y-2 md:gap-x-2'>
            <input type="email" 
            placeholder='Enter Your Email'
            className='h-10 rounded-2xl px-4 focus:outline-none text-sm text-blue-600 placeholder:text-sm'
            />
            <button className='bg-button h-10 rounded-2xl text-btnText text-xl md:px-2'>Sign Up</button>
          </div>
            <div className='flex w-full justify-between px-10 md:px-1 mt-8'>
                <AiFillInstagram/>
                <AiOutlineMail/>
                <FaTwitterSquare/>
                <FaLinkedin/>
                <AiFillFacebook/>
            </div>
          </div>
      

       
    </div>
  )
}
