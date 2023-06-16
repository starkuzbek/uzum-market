import React from 'react'
import "./Navbar.css"
import NavbarTop from './NavbarTop'
import NavbarMain from './NavbarMain'
import NavbarBottom from './NavbarBottom'
// import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <NavbarTop/>
        <NavbarMain/>
        <NavbarBottom/>
    </div>
  )
}

export default Navbar