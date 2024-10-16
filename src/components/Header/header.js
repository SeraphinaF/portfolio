import './header.css'
import headerImage from '../../assets/header-image.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <section className='header-container'>
      <div className='header'>
        <h1 className='header-text'>
          I'm <span className='Seraphina'>Seraphina</span>,<br></br> a Webdeveloper
        </h1>
        <p className='header-about'>I am passionate about making fun and functional websites. And bla bla and more stuff and.</p>
        <div>
          <div className="shadow"></div>
          <Link className="contact-btn" to='contact' spy={true} smooth={true} duration={500}>Contact</Link>
        </div>
      </div>
      <div className='image-container'>
        <img src={headerImage} className='image' alt="image of Seraphina Fortunato" />
      </div>
    </section>
  )
}

export default Header;
