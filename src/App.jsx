import { Route,Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { AboutUs } from './pages/AboutUs'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { NavBar } from './components/NavBar'
const App=()=> {

  return (
    <div className='overflow-auto'>
      <NavBar/>
      <div style={{marginTop:"120px"}}>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactPage/>}/>
        <Route path='/blogs' element={<BlogPage/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
