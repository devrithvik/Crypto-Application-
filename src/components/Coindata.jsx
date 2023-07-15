import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { userAuth } from '../helping/Authcontextprovider'
import {doc,arrayUnion,updateDoc} from 'firebase/firestore'
import { db } from '../helping/Firebase'
export const Coindata = ({coin}) => {
  const navigate = useNavigate();
  const [coinsaved,setCoinsaved] = useState(false);
  const {user}  = userAuth();

  const savecointoDB = async(e) => {
      e.preventDefault();  
      if(user?.email !== null){
          setCoinsaved(coinsaved => !coinsaved);
          const savedCoins = doc(db,'users',`${user.email}`)
          await updateDoc(savedCoins,{
            saved: arrayUnion({
                    user: user,
                    id: coin?.id,
                    image: coin?.image,
                    symbol: coin?.symbol,
                    rank: coin?.market_cap_rank,
                })
            })
        }
        else{
          alert('signin to save the coin!')
        }
      }

  

    return (
      
      <tr id={coin.id} className='h-20 hover:scale-105 duration-100' datahref={`${window.location.protocol}//${window.location.hostname}:${window.location.port ? window.location.port : ''}/coinpage?id=${coin.id}`}>
        <td onClick={savecointoDB}>{coinsaved ? <AiFillStar className='text-amber-300'/> : <AiOutlineStar/>}</td>
        <td>{coin.market_cap_rank}</td>
        <td onClick={() =>  navigate(`/coinpage/${coin.id}`)}><img src={coin.image} alt={coin.name} className='mx-auto h-10 p-0 my-0' /></td>
        <td>{coin.symbol.toUpperCase()}</td>
        <td>{coin.price_change_percentage_24h}</td>
        <td>{window.innerWidth > 536 &&  coin.current_price}</td>
        <td>{window.innerWidth > 536 && coin.total_volume}</td>
        <td>$ {coin.market_cap}</td>
        <td>
            {
              <Sparklines data={coin.sparkline_in_7d.price}>
                <SparklinesLine color={'teal'} /> 
              </Sparklines>
            }
        </td>
    </tr>

)
// navigate(`${window.location.protocol}//${window.location.hostname}:${window.location.port ? window.location.port : ''}/coinpage/${coin.id}`)
}
