import React,{useState, createContext, useContext, useEffect} from 'react'
import {auth,db} from './Firebase'
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
        onAuthStateChanged   } from 'firebase/auth' 

import {doc,setDoc} from 'firebase/firestore'

const Authcontext = createContext();

export const userAuth = () => {

    return useContext(Authcontext)
}

export const Authcontextprovider = ({children}) => {
    
    const [user,setUser] = useState(null)

    const createUser = (user,password) => {
        createUserWithEmailAndPassword(auth, user, password)
            
        //here "users" is the collection of users in the db.
        return setDoc(doc(db, 'users', email), { 
            savedCoins: [],
        })            
    }

    const signinUser = (user,password) => {
         return signInWithEmailAndPassword(auth, user, password)
            
    }
    
    const logoutUser = () => {
          return signOut(auth)
    }

    useEffect(() => {
        const updateUser = onAuthStateChanged(auth, (currentUser) => setUser(currentUser))

        return () => {

            updateUser();
        } 
        
    },[])


  return (
    <Authcontext.Provider value={{user,createUser,signinUser,logoutUser}}>
        {children} 
    </Authcontext.Provider>
  )
}
