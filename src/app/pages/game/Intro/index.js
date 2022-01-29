import { cloneElement, useState } from 'react'
import { Link } from 'react-router-dom'

const Intro = ({ children }) => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      {cloneElement(children, { ready: clicked })}
      <div className={`fullscreen text-center bg ${clicked ? 'clicked' : ''}`}>
        <Link onClick={() => setClicked(true)} to='/game'>
          Start
          <p className='text-small'>Not optimized for mobile</p>
        </Link>
      </div>
    </>
  )
}

export default Intro
