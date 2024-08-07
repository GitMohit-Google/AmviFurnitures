import { Route,Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { AboutUs, BlogPage, ContactPage, LandingPage } from './pages'
// import { ContactPage } from '@mui/icons-material'
const App=()=> {

  return (
    <div className='overflow-auto'>
      <NavBar/>
      <div style={{marginTop:"120px"}}>

      <Routes>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactPage/>}/>
        <Route path='/blogs' element={<BlogPage/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
