import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Kararlar from './components/pages/Kararlar'
import Üyeler from './components/pages/Üyeler'
import Tarihçe from './components/pages/Tarihçe'
import KullanıcıGirişi from './components/pages/KullanıcıGirişi'


function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path='/KullanıcıGirişi' element={<KullanıcıGirişi/>}/>
        <Route path='/' element={<Kararlar/>} />
        <Route path='/Üyeler' element={<Üyeler/>} />
        <Route path='/Tarihçe' element={<Tarihçe/>} />
      </Routes>
    </>
  )
}

export default SiteRoutes
