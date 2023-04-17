import { useEffect, useRef } from 'react'
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { RepeatWrapping, CubeTextureLoader } from 'three'
import { Environment, Plane, OrbitControls } from '@react-three/drei'
import Model from './Model'
import Trees from './Trees'
import House from './House'
import Sign from './Sign'
import SignTwo from './SignTwo'

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

  function fogColor() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      return '#fff'
    } else if (
      document.documentElement.getAttribute('data-theme') === 'light'
    ) {
      return '#000'
    } else {
      return '#fff'
    }
  }
  function intensityVal() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      return 0.4
    } else if (
      document.documentElement.getAttribute('data-theme') === 'light'
    ) {
      return 0.2
    } else {
      return 0.4
    }
  }
  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.repeat.set(50, 50)

  return (
    <>
      <Canvas
        style={{
          width: '100%',
          height: '100vh',
        }}
        camera={{ fov: 75, position: [-180, 200, 1000] }}
        shadows
        pixelRatio={window.devicePixelRatio}
      >
        <fog attach='fog' args={[fogColor(), 0, 2048]} />
        <CameraControls />
        <ambientLight color={'#fff4d9'} intensity={intensityVal()} />
        <pointLight
          position={[0, 75, 75]}
          color={'#fff4d9'}
          intensity={0.01}
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
        <House />
        <Sign />
        <SignTwo />
        <Trees posx={-350} posy={750} posz={0} />
        <Trees posx={450} posy={550} posz={0} />
        <Trees posx={-650} posy={450} posz={0} />
        <Trees posx={450} posy={-450} posz={0} />
        <Trees posx={-750} posy={150} posz={0} />
        <Trees posx={750} posy={250} posz={0} />
        <Trees posx={-750} posy={-150} posz={0} />
        <Trees posx={750} posy={-250} posz={0} />
        <Trees posx={-350} posy={-350} posz={0} />
        <Trees posx={150} posy={-850} posz={0} />
        <Trees posx={-150} posy={-550} posz={0} />
        <SkyBox />
        <Environment preset='sunset' />
      </Canvas>
    </>
  )
}

export default Hero
