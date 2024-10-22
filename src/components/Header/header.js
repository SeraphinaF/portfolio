import './header.css'
import headerImage from '../../assets/header-image.png';
import contactIcon from '../../assets/contact-icon.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <section className='header-container'>
      <div className='header'>
        <h1 className='header-text'>
          I'm <span className='Seraphina'>Seraphina</span>,<br /> a Webdeveloper
        </h1>
        <p className='header-about'>I am passionate about making fun and functional websites. And bla bla and more stuff and.</p>
        <Link className="contact-btn" to='contact' spy={true} smooth={true} duration={500}>
          Contact
          <img className="contact-icon" src={contactIcon} alt="contact" />
        </Link>
      </div>
      <div className='image-container'>
        <img src={headerImage} className='image' alt="image of Seraphina Fortunato" />
      </div>
    </section>
  );
};

export default Header;
