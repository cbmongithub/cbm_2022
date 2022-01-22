import { useProgress } from '@react-three/drei'

import './style.css'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <div className='loader'>
      <p>Loading..{Math.round(progress)}%</p>
    </div>
  )
}
export default Loader
