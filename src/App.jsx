import './App.css'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import Headers from './components/pages/Headers'



function App() {
  

  return (
    <>
      <Headers/>
      <Navbar/>
      <div className='container' >
        <div className='col-lg-12'>
          
       <SiteRoutes/>
       



        </div>
      </div>


    </>
  )
}

export default App
