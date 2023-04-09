import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { TypeAnimation } from 'react-type-animation'
import Buttons from '../Buttons'
import Model from './Model'
import { IntroData } from '../../data'
import './style.css'

const Hero = () => {
  return (
    <div className='intro_sec d-block d-lg-flex align-items-center hero-container'>
      <div className='h_bg-image order-1 order-lg-2 h-100 '>
        <Canvas
          style={{
            position: 'absolute',
          }}
          camera={{
            fov: 2,
            position: [0, 0, 17],
          }}
        >
          <Model />
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={1}
            enableZoom={false}
          />
          <Environment preset='city' />
        </Canvas>
      </div>
      <div className='text order-2 order-lg-1 h-100 d-lg-flex justify-content-center'>
        <div className='align-self-center'>
          <div className='intro mx-auto'>
            <h2 className='mb-1x'>{IntroData.title}</h2>
            <h1 className='fluidz-48 mb-1x'>
              <TypeAnimation
                sequence={[
                  IntroData.animated.first,
                  1500,
                  IntroData.animated.second,
                  1500,
                  IntroData.animated.third,
                  1500,
                  IntroData.animated.fourth,
                  1500,
                ]}
                wrapper='span'
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', display: 'inline-block' }}
              />
            </h1>
            <p className='mt-2x'>{IntroData.description}</p>
            <Buttons
              linkOne={'/portfolio'}
              textOne={'Portfolio'}
              linkTwo={'/contact'}
              textTwo={'Contact'}
              align={'left'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
