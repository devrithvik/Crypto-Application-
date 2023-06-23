import React, {useState,createContext,useContext} from 'react'

const ThemeContext = createContext()

export const toggleMode = () => {
    return useContext(ThemeContext)
  }

  
  

export const Themecontextprovider = ({children}) => {
  
  const getInitialTheme = () => {

    const theme = window.localStorage.getItem('color-theme')

    if(typeof theme === 'string'){
      return theme
    }

    const userTheme = window.matchMedia('(prefers-color-scheme: dark)')

    if(userTheme.matches) { return 'dark' }

    return 'light'

  }

  const [darkmode,setDarkmode] = useState(getInitialTheme);

    const changeMode = () => {
        setDarkmode((mode) => {
        window.localStorage.setItem('color-theme',!mode)
        return !mode 
      })
    }


  return (
     <ThemeContext.Provider value={{darkmode,changeMode}}>
        {children}
     </ThemeContext.Provider>
  )
  

}
