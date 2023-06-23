import React,{useState,useEffect} from 'react'
import { Fetchapi } from '../helping/Fetchapi'
import { useNavigate } from 'react-router-dom'
export const Trending = () => {
  const navigate = useNavigate()
    const url =  '/search/trending/'
    const [trendingcoins,setCoins] = useState([])
    useEffect(() => {
        const fetchfunction = async() => {
            const data = await Fetchapi(url);
            console.log(data.coins)
            setCoins(data.coins)
            console.log(typeof(trendingcoins))
        }
        fetchfunction()
    },[url])

    const manageClick = (id) => {
      navigate(`/coinpage/${id}`)
    }
    
     

  return (
    <div className='rounded-div text-opacity-100 font-bold py-5 mt-10 mx-0'>
        
        <div className='text-4xl mb-5'>Trending</div>
        <div className='flex w-full gap-y-5 gap-x-1 justify-between flex-wrap'>
        {    
             trendingcoins.map((coin) => (
                  <button 
                    key={coin.item.id} 
                    id={coin.item.id} 
                    onClick={() => manageClick(coin.item.id)}
                    className='flex items-center md:basis-1/4 basis-full rounded-2xl p-2  bg-slate-100 bg-opacity-80 hover:scale-110 duration-300'>
                  <img src={coin.item.small} alt={coin.item.name} className='z-10 rounded-full'/>
                  <div className=' relative flex flex-col text-black font-light pl-7 w-full -ml-5 py-1 rounded-xl bg-violet-500 bg-opacity-50'>
                          <span>{coin.item.name}</span>
                          <span >{coin.item.price_btc.toFixed(5)}</span>
                      </div>
                  </button>
             ))
            
        }
          </div>
        
    </div>
  )
}
