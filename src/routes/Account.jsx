import React,{useState,useEffect} from 'react'
import { db } from '../helping/Firebase'
import { userAuth } from '../helping/Authcontextprovider'
import { updateDoc,doc, onSnapshot } from 'firebase/firestore'
import{RxCross2} from 'react-icons/Rx'
export const Account = () => {
  const [savedCoins,setSavedCoins] = useState([]);
   const {user,logoutUser} = userAuth();
  useEffect(()=>{

    onSnapshot(doc(db,'users',`${user.email}`),(doc)=>{
      setSavedCoins(doc.data().saved);
    })
  },[user.email])

  const deleteCoin = async(passedId) => {
    const coinsPath = doc(db,'users',`${user.email}`)

    try{
      const updatedSavedCoins = savedCoins.filter((coin) => coin.id !== passedId)
    
      updateDoc(coinsPath,{
        saved: updatedSavedCoins,
      })

    }catch(err){ console.log(err) }
   
  }

  return (
    <div className='flex flex-col gap-y-10'> 
      <div className='rounded-div flex flex-col'>
          <div>Account</div>
          <div className='w-full flex justify-between'>
            <div> Email: {user.email} </div>
            <button onClick={logoutUser} className='bd-button text-btntext px-3'>SignOut</button>
          </div>
      </div>
     
      <table className='rounded-div'>
        <thead>
          <tr>
            <th>RANK</th>
            <th>COIN</th>
           <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {
            savedCoins.map((coin)=> {
                  <tr>
                    <td>{coin?.rank}</td>
                    <td><img src={coin?.image} alt={coin?.symbol} className='mx-auto h-10 p-0 my-0' /> {coin?.id}</td>
                    <th onClick={() => deleteCoin(coin.id)}><RxCross2/></th>
                  </tr>
            })
          }
        </tbody>
      </table>
      </div>
  )
}
