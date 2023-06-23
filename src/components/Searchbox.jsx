import React from 'react'

export const Searchbox = ({searchedterm,setSearchedterm}) => {
    
  return (
    <div className='flex gap-x-2 items-center max-w-[1140px] w-full mx-auto px-5 sm:text-md md:text-lg lg:text-xl mt-10'>
    <input 
     onChange={(e) => setSearchedterm(e.target.value)}
     value={searchedterm}
     placeholder='search a coin...'
     type="text"
     className='flex-1 rounded-2xl focus:outline-none bg-primary border-input border-2 h-14 px-3' />
    <button className=' text-btnText bg-button px-2 rounded-2xl h-10'>Search</button>
</div>
  )
}
