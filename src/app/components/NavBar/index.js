import { useState } from 'react'
import { VscGrabber, VscClose } from 'react-icons/vsc'
import { FaGithub, FaTiktok, FaCodepen } from 'react-icons/fa'
import { LogoText, Socials } from '../../data'
import ThemeToggle from '../ThemeToggle'
import { Link } from 'react-router-dom'
import './style.css'

const NavBar = () => {
  const [isActive, setActive] = useState('false')

  const handleToggle = () => {
    document.body.classList.toggle('overflow')
    document.body.classList.toggle('grayscale', 'not__grayscale')
    setActive(!isActive)
  }

  return (
    <nav className='fixed-top container'>
      <div className='d-flex align-items-center justify-content-between'>
        <Link className='logo__text' to='/'>
          {LogoText}
        </Link>
        <div className='d-flex align-items-center'>
          <ThemeToggle />
          <button className='menu__button nav_action' onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>
      </div>

      <div className={`site__navigation ${!isActive ? 'menu__opened' : ''}`}>
        <div className='bg__menu h-100'>
          <div className='menu__wrapper'>
            <div className='menu__container p-3'>
              <ul className='main__menu'>
                <li className='menu_item '>
                  <Link onClick={handleToggle} to='/' className='my-3'>
                    Home
                  </Link>
                </li>
                <li className='menu_item'>
                  <Link onClick={handleToggle} to='/portfolio' className='my-3'>
                    {' '}
                    Portfolio
                  </Link>
                </li>
                <li className='menu_item'>
                  <Link onClick={handleToggle} to='/about' className='my-3'>
                    About
                  </Link>
                </li>
                <li className='menu_item'>
                  <Link onClick={handleToggle} to='/contact' className='my-3'>
                    {' '}
                    Contact
                  </Link>
                </li>
              </ul>
              <div className='menu__footer'>
                <a
                  href={Socials.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub />
                </a>
                <a
                  href={Socials.codepen}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaCodepen />
                </a>
                <a
                  href={Socials.tiktok}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
