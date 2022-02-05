import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : localStorage.setItem('theme', 'dark')
  )
  let location = window.location
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    location.pathname === '/'
      ? location.reload()
      : console.log('This is not the home page')
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <div className='nav_action' onClick={toggleTheme}>
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </div>
  )
}

export default ThemeToggle
