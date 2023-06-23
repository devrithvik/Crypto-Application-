import './App.css'
import { Themecontextprovider } from './helping/Themecontextprovider'
import { Root } from './routes/Root'
import { Hamburgercontextprovider } from './helping/Hamburgerontextprovider'
import { Authcontextprovider } from './helping/Authcontextprovider'
function App() {
  
  return (
    <div className='max-w-full'>
    <Themecontextprovider>
      <Authcontextprovider>
        <Hamburgercontextprovider>
          <Root />
        </Hamburgercontextprovider>
       </Authcontextprovider>
    </Themecontextprovider>
    </div>
  )
}

export default App

