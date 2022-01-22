import { useState } from 'react'
import { extend, Canvas } from '@react-three/fiber'
//import { Environment, OrbitControls } from '@react-three/drei'
import { Text } from 'troika-three-text'
//import Portrait from '../components/Portrait'

extend({ Text })

const text =
  "Hey, i'm Christian. I develop applications for the web. Feel free to browse my portfolio or contact me anytime."

const Hero = () => {
  const [rotation, setRotation] = useState([0, 0, 0, 0])
  const opts = {
    fontSize: 12,
    color: '#99ccff',
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
    materialType: 'MeshPhongMaterial',
  }
  const onMouseMove = (e) => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0,
    ])
    console.log('Mouse moved.')
  }

  return (
    <>
      <Canvas
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          marginTop: '55px',
        }}
        pixelRatio={window.devicePixelRatio}
        onMouseMove={onMouseMove}
      >
        <text
          position-z={-180}
          rotation={rotation}
          {...opts}
          text={text}
          anchorX='center'
          anchorY='middle'
        >
          {opts.materialType === 'MeshPhongMaterial' ? (
            <meshPhongMaterial attach='material' color={opts.color} />
          ) : null}
        </text>

        <pointLight position={[-100, 0, -160]} />
        <pointLight position={[0, 0, -170]} />
        <pointLight position={[100, 0, -160]} />
      </Canvas>
    </>
  )
}

export default Hero
