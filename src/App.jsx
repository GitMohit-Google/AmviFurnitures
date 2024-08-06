import { Route,Routes } from 'react-router-dom'
import { AboutUs, BlogPage, ContactPage, LandingPage } from './pages'
const App=()=> {

  return (
    <div className='overflow-auto'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactPage/>}/>
        <Route path='/blogs' element={<BlogPage/>}/>
      </Routes>
    </div>
  )
}

export default App
