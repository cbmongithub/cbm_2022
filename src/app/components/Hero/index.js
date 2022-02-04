import { useRef } from 'react'
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { RepeatWrapping, CubeTextureLoader } from 'three'
import { Environment, Plane, OrbitControls } from '@react-three/drei'

import Model from './Model'

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()
  const controls = useRef()
  useFrame(() => controls.current.update())
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      autoRotateSpeed={0.2}
      enableZoom={true}
      minDistance={100}
      maxDistance={200}
      enablePan={false}
    />
  )
}

const SkyBox = () => {
  const { scene } = useThree()
  const bgLoader = new CubeTextureLoader()
  const bgTexture = bgLoader.load([
    '/assets/img/hero/skybox/light_ft.png',
    '/assets/img/hero/skybox/light_bk.png',
    '/assets/img/hero/skybox/light_up.png',
    '/assets/img/hero/skybox/light_dn.png',
    '/assets/img/hero/skybox/light_rt.png',
    '/assets/img/hero/skybox/light_lf.png',
  ])
  scene.background = bgTexture
  return null
}

const Hero = () => {
  const texture = useLoader(
    TextureLoader,
    '/assets/img/hero/minecraft_grass.jpg'
  )
  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.repeat.set(50, 50)

  return (
    <Canvas
      style={{
        width: '100%',
        height: '100vh',
        filter: 'grayscale(var(--gray-scale))',
      }}
      camera={{ fov: 75, position: [-180, 55, 50] }}
      shadows
      pixelRatio={window.devicePixelRatio}
    >
      <CameraControls />
      <ambientLight color={'#fff4d9'} intensity={0.4} />
      <pointLight
        position={[180, 75, 75]}
        color={'#fff4d9'}
        intensity={0.13}
        castShadow
      />
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[4096, 4096]}
      >
        <meshPhongMaterial attach='material' map={texture} />
      </Plane>
      <Model />
      <SkyBox />
      <Environment preset='sunset' />
    </Canvas>
  )
}

export default Hero
