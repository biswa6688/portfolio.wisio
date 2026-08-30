import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Float } from '@react-three/drei'
import * as THREE from 'three'
import { skills } from '../data/profile'

const categoryColor: Record<string, string> = {
  Backend: '#38bdf8',
  Frontend: '#a78bfa',
  Language: '#facc15',
  Database: '#34d399',
}

function SkillNode({
  position,
  name,
  category,
}: {
  position: [number, number, number]
  name: string
  category: string
}) {
  const [hovered, setHovered] = useState(false)
  const color = categoryColor[category] ?? '#f8fafc'

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.4 : 1}
      >
        <icosahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.9 : 0.35}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      <Html center distanceFactor={8} style={{ pointerEvents: 'none' }}>
        <div
          className={`whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium backdrop-blur transition-opacity ${
            hovered
              ? 'border-white/60 bg-black/70 text-white opacity-100'
              : 'border-white/10 bg-black/30 text-white/70 opacity-80'
          }`}
        >
          {name}
        </div>
      </Html>
    </group>
  )
}

export function SkillOrb() {
  const group = useRef<THREE.Group>(null)

  const nodes = useMemo(() => {
    const n = skills.length
    const radius = 2.6
    return skills.map((skill, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / n)
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5)
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      return { ...skill, position: [x, y, z] as [number, number, number] }
    })
  }, [])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15
  })

  return (
    <group ref={group}>
      {nodes.map((node) => (
        <Float key={node.name} speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
          <SkillNode position={node.position} name={node.name} category={node.category} />
        </Float>
      ))}
    </group>
  )
}
