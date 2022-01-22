import React, { useEffect, useState } from 'react'
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <div className='nav_action' onClick={toggleTheme}>
      <WiMoonAltWaningCrescent4 />
    </div>
  )
}

export default ThemeToggle
