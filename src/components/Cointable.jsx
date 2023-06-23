import React, {useState,useEffect} from 'react'
import { Fetchapi } from '../helping/Fetchapi'
import { Coindata } from './Coindata'
export const Cointable = ({searchedterm}) => {
    const url = 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h&locale=en&precision=2'
    const [coins,setCoins] = useState([])
    useEffect(() => {
        const fetchfunction = async() => {
            const data = await Fetchapi(url);
            setCoins(data)
        }
        return () => {

            fetchfunction()
        }
    },[url])
    
     return (
    <table className='relative bg-primary rounded-div mt-10 text-center'>
        <thead className='sm:text-md md:text-lg lg:text-xl font-semibold'>
            <tr>
             <th></th>
             <th>#</th>
             <th>Coin</th>
             <th>Symbol</th>
             <th>24H</th>
             <th>{ window.innerWidth > 536 && ("Price")}</th>
             <th>{ window.innerWidth > 536 && ("24H Vol")}</th>
             <th>Mkt Cap</th>
             <th>Last 7 days</th>
             </tr>
        </thead>
        <tbody className='font-thin'>

            {
                coins.filter((value) => {
                    if(searchedterm === '' || value.name.toLowerCase().includes(searchedterm.toLowerCase())){
                    return value;
                }
                }).map((coin) => (  <Coindata key={coin.id} coin={coin}/>  ))
            }
             
        </tbody>
    </table>
  )
}
