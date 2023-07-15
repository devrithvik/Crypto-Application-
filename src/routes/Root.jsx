import React from 'react'
import { Navbar } from '../components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home'; 
import { toggleMode } from '../helping/Themecontextprovider';
import { Sidebar } from '../components/Sidebar';
import { Coinpage } from './Coinpage';
import { Signup } from './Signup';
import { Signin } from './Signin';
import { Footer } from '../components/Footer';
import { Account } from './Account';
export const Root = () => {
    const {darkmode} = toggleMode()

  return (
    <div className={`${darkmode ? "dark" : "light"}`}> 
         <div className='bg-primary text-primary min-w-full min-h-[100vh]'> 
            <Navbar /> 
            <Routes>
                <Route path='/' element={ <Home /> } /> 
                <Route path='/sidebar' element={ <Sidebar /> } /> 
                <Route path='/signup' element={ <Signup /> } /> 
                <Route path='/signin' element={ <Signin/> } /> 
                <Route path='/account' element={ <Account/> } /> 
                <Route path={`/coinpage/:id`} element={ <Coinpage /> } /> 
            </Routes>
            <Footer />
        </div>
    </div>
  )
}

 