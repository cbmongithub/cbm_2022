import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Plane, OrbitControls } from '@react-three/drei'
import Model from './Model'
import Loader from '../Loader'

const Hero = () => (
  <Suspense fallback={<Loader />}>
    <Canvas
      style={{
        width: '100%',
        background: 'lightblue',
        height: '100vh',
        filter: 'grayscale(var(--gray-scale))',
      }}
      camera={{ fov: 75, position: [-180, 55, 50] }}
      shadows
      pixelRatio={window.devicePixelRatio}
    >
      <ambientLight intensity={0.4} />
      <pointLight castShadow position={[-75, 75, 75]} intensity={0.2} />
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[5000, 5000]}
      >
        <meshStandardMaterial color={'green'} />
      </Plane>
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={1}
        enableZoom={true}
        minDistance={100}
        maxDistance={200}
        enablePan={false}
      />
      <Model />
      <Environment preset='sunset' />
    </Canvas>
  </Suspense>
)

export default Hero
