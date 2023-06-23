import React,{useState,useEffect} from 'react'
import { getHamburgerContext } from '../helping/Hamburgerontextprovider'
import { Searchbox } from '../components/Searchbox'
import { Cointable } from '../components/Cointable'
import { Trending } from '../components/Trending'
import { Footer } from '../components/Footer'
export const Home = () => {

    const [searchedterm, setSearchedterm] = useState("")
    const {setHamburger} = getHamburgerContext() //Provides context for hamburger

    useEffect(() => { // this useEffect hook  runs setHamburger function only once, when this home component is mounted.
        setHamburger(true) 
    },[])

  return ( 
    <main>
        <Searchbox searchedterm={searchedterm} setSearchedterm={setSearchedterm}/>
        <Cointable searchedterm={searchedterm}/>
        <Trending />
    </main>
 ) 
}
 