import { cloneElement, useState } from 'react'
import { Link } from 'react-router-dom'

const Intro = ({ children }) => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      {cloneElement(children, { ready: clicked })}
      <div className={`fullscreen bg ${clicked ? 'clicked' : ''}`}>
        <Link onClick={() => setClicked(true)} to='/game'>
          Start
        </Link>
      </div>
    </>
  )
}

export default Intro
