import React, { useRef, useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import burgerMenu from '../../assets/burgermenu.png';
import closeIcon from '../../assets/close-icon.png';

const Navbar = () => {
  const navBarRef = useRef(null);
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <section className='navbar-container'>
      <img onClick={toggleNav} className='icon' id={isNavVisible ? 'close-icon' : 'burger-menu'} src={isNavVisible ? closeIcon : burgerMenu} alt="Menu" />
      <nav
        className="navbar"
        ref={navBarRef}
        style={{ display: window.innerWidth < 1024 ? (isNavVisible ? 'block' : 'none') : 'block' }}
      >
        <div className="menu">
          <Link activeClass="active" className="menuItem" to='home' spy={true} smooth={true} duration={500} onClick={toggleNav}>
            <div className="slider"></div>Home
          </Link>
          <Link activeClass="active" className="menuItem" to='portfolio' spy={true} smooth={true} duration={500} onClick={toggleNav}>
            <div className="slider"></div>Portfolio
          </Link>
          <Link activeClass="active" className="menuItem" to='contact' spy={true} smooth={true} duration={500} onClick={toggleNav}>
            <div className="slider"></div>Contact
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
