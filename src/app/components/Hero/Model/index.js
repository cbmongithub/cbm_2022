import { useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AnimationMixer, FrontSide } from 'three'

const Model = () => {
  const model = useLoader(GLTFLoader, '/assets/img/hero/models/horseback.gltf')
  const mixer = new AnimationMixer(model.scene)
  const animationList = model.animations.map((animation) => animation.name)
  const [count, setCount] = useState(0)
  const anim = animationList[count]

  const handleAnimation = () => {
    count >= 10 ? setCount(0) : setCount(count + 1)
  }

  model.animations.forEach((clip) => {
    const action = mixer.clipAction(clip)
    if (clip.name === anim.toString()) {
      action.play()
    }
  })

  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.side = FrontSide
    }
  })

  return (
    <primitive
      object={model.scene}
      onClick={() => handleAnimation()}
      position={[0, 0, 0]}
      scale={1}
    />
  )
}

export default Model
