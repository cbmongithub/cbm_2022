import { Link } from 'react-router-dom'

const Buttons = ({ linkOne, textOne, linkTwo, textTwo, align }) => {
  return (
    <div className='intro_btn-action pt-3' style={{ textAlign: align }}>
      {linkOne ? (
        <Link to={linkOne} className='text_2'>
          <div id='button_p' className='ac_btn btn '>
            {textOne}
            <div className='ring one'></div>
            <div className='ring two'></div>
            <div className='ring three'></div>
          </div>
        </Link>
      ) : (
        ''
      )}{' '}
      {linkTwo ? (
        <Link to={linkTwo}>
          <div id='button_h' className='ac_btn btn'>
            {textTwo}
            <div className='ring one'></div>
            <div className='ring two'></div>
            <div className='ring three'></div>
          </div>
        </Link>
      ) : (
        ''
      )}
    </div>
  )
}

export default Buttons
