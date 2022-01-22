import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import HeroText from './HeroText'
import Portrait from './Portrait'
import Loader from '../Loader'

const DisplayText = () => {
  const ref = useRef()
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.sin(clock.getElapsedTime()) * 0.1)
  )
  return (
    <group ref={ref}>
      <HeroText
        position={[0, 0.1, -1]}
        vAlign='top'
        children={`I'm Christian`}
      />
      <HeroText
        position={[0, 0, -1]}
        vAlign='bottom'
        children='I love to code.'
      />
    </group>
  )
}

const Hero = () => (
  <Suspense fallback={<Loader />}>
    <Canvas
      style={{
        height: '100vh',
        filter: 'grayscale(var(--gray-scale))',
      }}
      camera={{
        fov: 2,
        position: [0, 0, 18],
      }}
      pixelRatio={window.devicePixelRatio}
    >
      <Portrait />
      <DisplayText />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={0.1}
        enableZoom={false}
        enablePan={false}
      />
      <Environment preset='warehouse' />

      <pointLight position={[180, 0, -160]} />
      <pointLight position={[0, 0, -170]} />
      <pointLight position={[-180, 0, -160]} />
    </Canvas>
  </Suspense>
)

export default Hero
