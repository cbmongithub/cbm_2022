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
        height: '100vh',
        filter: 'grayscale(var(--gray-scale))',
      }}
      shadows
      camera={{
        fov: 100,
        position: [-25, 35, 75],
      }}
      pixelRatio={window.devicePixelRatio}
    >
      <ambientLight intensity={0.1} />
      <pointLight castShadow position={[-25, 100, 25]} />
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -34, 0]}
        args={[512, 512]}
      >
        <meshStandardMaterial attach='material' color='green' />
      </Plane>
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={0.75}
        enableZoom={true}
        minDistance={100}
        maxDistance={200}
        enablePan={false}
      />
      <Model />
      <Environment preset='city' />
    </Canvas>
  </Suspense>
)

export default Hero
