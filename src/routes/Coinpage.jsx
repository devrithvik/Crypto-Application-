import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Fetchapi } from '../helping/Fetchapi'
import { Sparklines, SparklinesLine } from 'react-sparklines'
export const Coinpage = () => {
  const {id} = useParams()
  const [data,setCoindata] = useState({})
  useEffect(() => {
    const getCoindata = async() => {
     const coinData = await Fetchapi(`coins/${id}?localization=true&market_data=true&developer_data=true&sparkline=true`)
     setCoindata(coinData);
     console.log(data?.sparkline_in_7d)
    }
   return () => {
    getCoindata()
   }
  },[])
   
 
  return (
    <div className='rounded-div mt-10 px-5 flex flex-col gap-y-5 flex-wrap'>


      <div className='flex p-2'>
            <img src={data?.image?.small} alt={data.id} className='w-[5vw] object-fill h-[5vw] mr-3'/>
            <div className='flex flex-col'>
              <span className='text-bottom font-bold sm:text-md md:text-3xl'>{ data.name }</span>
              <span className=' sm:text-sm md:text-md text-red-500  '>{data?.name + "/usd"}</span>
            </div>
        
      </div>


      {/* -------------------------------------------------------------------------------------------------------------------------------- */}
     
     
      <div className='flex flex-wrap gap-6  font-semibold'>

            <span className='flex flex-col gap-y-2'><>CurrentPrice:</><span>{"  $ " + data?.market_data?.current_price.usd}</span></span>
            <span className='flex flex-col gap-y-2'><> Market Cap:</><span>{"  $ " + data?.market_data?.market_cap?.usd}</span></span>
            <span className='flex flex-col gap-y-2'><> Total Volumn:</><span>{"  $ " + data?.market_data?.total_volume?.usd}</span></span>
            <span className='flex flex-col gap-y-2'><> 24H High:</><span>{"  $ " + data?.market_data?.high_24h?.usd}</span></span>
            <span className='flex flex-col gap-y-2'><> 24H Low:</><span>{"  $ " + data?.market_data?.low_24h?.usd}</span></span>
      </div>

            
      {/* -------------------------------------------------------------------------------------------------------------------------------- */}

      
          <Sparklines data={data?.market_data?.sparkline_7d?.price}>
                  <SparklinesLine color={'teal'} /> 
          </Sparklines>
       
           

      {/* -------------------------------------------------------------------------------------------------------------------------------- */}
        

      <div className='rounded-div py-5'>       {/*marketdatta */}
             <h2 className='sm:text-sm md:text-xl font-semibold mb-3'>Market Data</h2>
              <div className='flex flex-wrap gap-6 font-semibold'>
                  <span className='flex flex-col gap-y-2'><>Market Rank</><span>{data?.market_cap_rank}</span> </span>
                  <span className='flex flex-col gap-y-2'><>Portfolio Users</><span>{data?.watchlist_portfolio_users}</span></span>
                  <span className='flex flex-col gap-y-2'><>Interest_Score</><span>{(data?.public_interest_score)*100 + "%"}</span></span>
                  <span className='flex flex-col gap-y-2'><>Liquidity_Score</><span>{data?.liquidity_score}</span></span>
                  <span className='flex flex-col gap-y-2'><>Sentiment Up %</><span>{data?.sentiment_votes_up_percentage + "%"}</span></span>
                  <span className='flex flex-col gap-y-2'><>Sentiment Down %</><span>{data?.sentiment_votes_down_percentage + "%"}</span></span>
              </div>
       </div>


      {/* -------------------------------------------------------------------------------------------------------------------------------- */}
    
    
     <div className='rounded-div py-5'>
            <div className='mb-3'>
                <span className='sm:text-sm md:text-xl font-semibold '>About {data.name}</span>
                <a href={data?.links?.homepage} target='_blank' className='text-blue-500 ml-2'><i>Know more About </i> {data?.name}</a>
            </div>
            {data?.description?.en.slice(0,300) + "..."}
     </div>


    </div>
  )
}
  