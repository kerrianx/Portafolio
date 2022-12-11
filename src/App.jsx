import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/intro'
import Navbar from './components/Navbar/Navbar'
import Portafolio from './components/Portafolio/Portafolio'
import Services from './components/services/services'
import { themeContext } from './components/context/Context'
import { useContext } from 'react'
function App() {
  const theme = useContext(themeContext)
  const darkmode=theme.state.darkMode
  return (
    <div className="App" style={{background:darkmode?'black': '',color:darkmode?'white':''}}>
     <Navbar/>
     <Intro/>
     <Services/>
     <Portafolio/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
