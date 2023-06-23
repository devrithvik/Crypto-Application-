import React from 'react'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
  return (
   
    <ul className='relative w-full flex flex-col text-center top-10 gap-y-5'>
      <li><button onClick={() => console.log("")}><Link to='/'>Home</Link></button> </li>
      <hr />
      <li><Link to='/Account'>Account</Link> </li>
      <hr />
       
      <Link to='/signin'> <button className=' hover:opacity-50'>SignIn</button></Link>
      <hr />
      <Link to='/signup'><button className='bg-button text-btnText rounded-2xl px-2 md:px-4 py-1 hover:opacity-50 w-full'>Sign Up</button></Link>
     
    </ul>

  )
}
