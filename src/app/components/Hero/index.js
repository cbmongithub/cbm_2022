import { useEffect, useRef } from 'react'
import { FaHandPointer } from 'react-icons/fa'
import {
  extend,
  Canvas,
  useLoader,
  useThree,
  useFrame,
} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Text } from 'troika-three-text'
import { RepeatWrapping, CubeTextureLoader } from 'three'
import { Environment, Plane, OrbitControls } from '@react-three/drei'
import Model from './Model'
import Trees from './Trees'
import { HeroData } from '../../data'
import './style.css'
import font from './Font'
extend({ Text })

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
  function color() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      return '#000'
    } else if (
      document.documentElement.getAttribute('data-theme') === 'light'
    ) {
      return '#fff'
    } else {
      return '#000'
    }
  }
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
      return 0.07
    } else {
      return 0.4
    }
  }
  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.repeat.set(50, 50)
  const opts = {
    font: 'Philosopher',
    fontSize: 120,
    color: color(),
    maxWidth: 1000,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
    materialType: 'MeshBasicMaterial',
  }

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
        <fog attach='fog' args={[fogColor(), 0, 2048]} />
        <text
          position-x={0}
          position-z={-500}
          position-y={150}
          {...opts}
          text={`${HeroData.title}\n${HeroData.paragraph}`}
          font={font[opts.font]}
          anchorX='center'
          anchorY='middle'
        >
          {opts.materialType === 'MeshPhongMaterial' ? (
            <meshPhongMaterial attach='material' color={opts.color} />
          ) : null}
        </text>
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
        <Trees posx={-750} posy={150} posz={0} />
        <Trees posx={750} posy={250} posz={0} />
        <Trees posx={-750} posy={-150} posz={0} />
        <Trees posx={750} posy={-250} posz={0} />
        <Trees posx={-350} posy={-350} posz={0} />
        <Trees posx={350} posy={-450} posz={0} />
        <Trees posx={-150} posy={-550} posz={0} />
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
