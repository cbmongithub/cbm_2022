import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Portrait from '../../components/Portrait'

const Home = () => (
  <section className='home'>
    <Canvas
      style={{ height: '100vh', filter: 'grayscale(var(--gray-scale))' }}
      camera={{
        fov: 2,
        position: [0, 0, 17],
      }}
    >
      <Portrait />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={1}
        enableZoom={false}
        enablePan={false}
      />
      <Environment preset='city' />
    </Canvas>
  </section>
)

export default Home
