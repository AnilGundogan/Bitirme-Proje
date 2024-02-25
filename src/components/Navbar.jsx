import React from 'react'
import { NavLink ,Link } from 'react-router-dom'



function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="btn btn-info" to="KullanıcıGirişi">Kullanıcı Girişi</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <NavLink className="nav-link" to="/">Kararlar</NavLink>
        <NavLink className="nav-link" to="/Üyeler">Üyeler</NavLink>
        <NavLink className="nav-link" to="/Tarihçe">Tarihçe</NavLink>
        

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
