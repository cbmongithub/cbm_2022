import { useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

const Model = () => {
  const model = useLoader(GLTFLoader, '/assets/img/horseback.gltf')
  const mixer = new THREE.AnimationMixer(model.scene)
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
      child.material.side = THREE.FrontSide
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
