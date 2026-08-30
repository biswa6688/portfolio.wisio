import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

export function HeroModel() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.12
      mesh.current.rotation.y += delta * 0.18
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial
          color="#38bdf8"
          attach="material"
          distort={0.35}
          speed={1.6}
          roughness={0.15}
          metalness={0.6}
          emissive="#0ea5e9"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  )
}
