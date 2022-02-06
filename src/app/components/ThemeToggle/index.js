import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : localStorage.setItem('theme', 'dark')
  )

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    let location = window.location
    if (location.pathname === '/') {
      location.reload()
    }
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
