import React,{useState, useContext, createContext} from 'react'
const HamburgerContext = createContext()
export const getHamburgerContext = () => {  return useContext(HamburgerContext); }

export const Hamburgercontextprovider = ({children}) => {
    
    const [hamburger,setHamburger]  = useState(false)
    
  return (
    <HamburgerContext.Provider value={{hamburger,setHamburger}}>
        {children}
    </HamburgerContext.Provider>
  )
}
