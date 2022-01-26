import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect } from 'react'
import { extend, useLoader } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { MeshWobbleMaterial } from '@react-three/drei'
const boldUrl = '/assets/fonts/blob.json'

extend({ TextGeometry })

const HeroText = ({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1.5,
  color = '#444',
  ...props
}) => {
  const font = useLoader(FontLoader, boldUrl)
  const config = useMemo(
    () => ({
      font,
      size: 1.5,
      height: 0.5,
      color: color,
    }),
    [font, color]
  )
  const mesh = useRef()
  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox.getSize(size)
    mesh.current.position.x =
      hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    mesh.current.position.y =
      vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [children, hAlign, vAlign])
  return (
    <group {...props} scale={[0.05 * size, 0.05 * size, 0.05]}>
      <mesh ref={mesh}>
        <textGeometry args={[children, config]} />
        <MeshWobbleMaterial color={config.color} factor={0.4} speed={0.1} />
      </mesh>
    </group>
  )
}

export default HeroText
