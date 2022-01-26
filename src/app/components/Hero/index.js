import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import HeroText from './HeroText'
import Portrait from './Portrait'
import Loader from '../Loader'
import { HeroData } from '../../data'

const TitleText = () => {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = Math.cos(t / 2) / 20
    ref.current.rotation.x = Math.sin(t / 2) / 20
    ref.current.rotation.y = Math.cos(t / 2) / 20
  })
  return (
    <group ref={ref}>
      <HeroText
        position={[0, 0.2, -2]}
        vAlign='top'
        children={HeroData.title}
      />
    </group>
  )
}

const ParagraphText = () => {
  const secondRef = useRef()
  useFrame((state) => {
    const s = state.clock.getElapsedTime()
    secondRef.current.rotation.z = Math.sin(s / 2) / 16
    secondRef.current.rotation.x = Math.cos(s / 2) / 16
    secondRef.current.rotation.y = Math.sin(s / 2) / 16
  })
  return (
    <group ref={secondRef}>
      <HeroText
        position={[0, -0.2, -2]}
        vAlign='bottom'
        children={HeroData.paragraph}
      />
    </group>
  )
}

const HiddenText = () => {
  const thirdRef = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    thirdRef.current.rotation.z = Math.cos(t / 2) / 40
    thirdRef.current.rotation.x = Math.sin(t / 2) / 40
    thirdRef.current.rotation.y = Math.cos(t / 2) / 40
  })
  return (
    <group ref={thirdRef}>
      <HeroText
        position={[-1, 1, -10]}
        vAlign='top'
        size={1}
        children='PLAY GAME'
        color={'red'}
        onPointerDown={() => (window.location.pathname = 'game')}
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
        position: [0, 0, 25],
      }}
      pixelRatio={window.devicePixelRatio}
    >
      <Portrait />
      <TitleText />
      <ParagraphText />
      <HiddenText />
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={0.1}
        enableZoom={true}
        minDistance={15}
        maxDistance={45}
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
