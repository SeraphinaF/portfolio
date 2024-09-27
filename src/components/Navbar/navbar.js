import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import burgerMenu from '../../assets/burgermenu.png'

const Navbar = () => {
  return (
    <section className='navbar-container'>
      <img className='burger-menu' src={burgerMenu} />
      <nav className="navbar">
        <div className="menu">
          <Link activeClass="active" className="menuItem" to='home' spy={true} smooth={true} duration={500}>
            <div class="slider"></div>Home</Link>
          <Link activeClass="active" className="menuItem" to='portfolio' spy={true} smooth={true}  duration={500}>
            <div class="slider"></div>Portfolio</Link>
          <Link activeClass="active" className="menuItem" to='contact' spy={true} smooth={true} duration={500}>
            <div class="slider"></div>Contact</Link>

        </div>
      </nav>
    </section>
  )
}

export default Navbar
