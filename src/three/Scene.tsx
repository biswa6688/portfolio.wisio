import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Starfield } from './Starfield'
import { HeroModel } from './HeroModel'
import { SkillOrb } from './SkillOrb'

const mouse = { x: 0, y: 0 }

function handlePointerMove(event: PointerEvent) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = (event.clientY / window.innerHeight) * 2 - 1
}

if (typeof window !== 'undefined') {
  window.addEventListener('pointermove', handlePointerMove)
}

function CameraRig({ activeSection }: { activeSection: string }) {
  const { camera } = useThree()
  const targetPos = useRef(new THREE.Vector3(0, 0, 8))

  useFrame(() => {
    const parallaxX = mouse.x * 0.6
    const parallaxY = -mouse.y * 0.4

    if (activeSection === 'skills') {
      targetPos.current.set(parallaxX, parallaxY, 6.5)
    } else {
      targetPos.current.set(parallaxX, parallaxY, 8)
    }

    camera.position.lerp(targetPos.current, 0.04)
    camera.lookAt(0, 0, 0)
  })

  return null
}

export function Scene({ activeSection }: { activeSection: string }) {
  const showHero = activeSection === 'hero' || activeSection === 'about'
  const showSkills = activeSection === 'skills'

  return (
    <Canvas
      className="!fixed inset-0 -z-10"
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#05070d']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#a78bfa" />

      <Suspense fallback={null}>
        <Starfield />
        {showHero && <HeroModel />}
        {showSkills && <SkillOrb />}
      </Suspense>

      <CameraRig activeSection={activeSection} />
    </Canvas>
  )
}
