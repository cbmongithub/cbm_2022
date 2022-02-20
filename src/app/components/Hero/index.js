import { useEffect, useRef } from 'react'
import { FaHandPointer } from 'react-icons/fa'
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { RepeatWrapping, CubeTextureLoader } from 'three'
import { Environment, Plane, OrbitControls } from '@react-three/drei'

import Model from './Model'

import './style.css'

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
  useEffect(() => {
    let day = document.documentElement.getAttribute('data-theme')
    if (day === 'undefined' || undefined) {
      day = 'dark'
    }
    const bgLoader = new CubeTextureLoader()
    const bgTexture = bgLoader.load([
      `/assets/img/hero/skybox/${day}_ft.png`,
      `/assets/img/hero/skybox/${day}_bk.png`,
      `/assets/img/hero/skybox/${day}_up.png`,
      `/assets/img/hero/skybox/${day}_dn.png`,
      `/assets/img/hero/skybox/${day}_rt.png`,
      `/assets/img/hero/skybox/${day}_lf.png`,
    ])
    scene.background = bgTexture
  }, [scene])
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
    <>
      <Canvas
        style={{
          width: '100%',
          height: '100vh',
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
      <div className='btn_container'>
        <div className='bg_click'></div>
        <div className='click'>
          <FaHandPointer />
        </div>
      </div>
    </>
  )
}

export default Hero
