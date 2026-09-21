import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Html } from '@react-three/drei'
import * as THREE from 'three'
import logo from '../assets/logo.png'

function PulsingSphere() {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.05)
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.3 + Math.sin(t * 1.2) * 0.1)
      glowRef.current.material.opacity = 0.08 + Math.sin(t * 1.5) * 0.03
    }
  })

  return (
    <group>
      {/* Glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial color="#5e6ad2" transparent opacity={0.08} />
      </mesh>

      {/* Core sphere */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#5e6ad2"
            emissive="#5e6ad2"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            distort={0.15}
            speed={2}
          />
        </mesh>
      </Float>
    </group>
  )
}

function PlanetSystem({ angle, emoji, label, radius, speed, inclination }) {
  const nodeRef = useRef()

  useFrame(({ clock }) => {
    if (nodeRef.current) {
      const t = clock.getElapsedTime()
      const rad = (angle * Math.PI) / 180 + t * speed
      nodeRef.current.position.x = Math.cos(rad) * radius
      nodeRef.current.position.z = Math.sin(rad) * radius
    }
  })

  return (
    <group rotation={[inclination, 0, 0]}>
      {/* Orbit Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
        <meshBasicMaterial color="#5e6ad2" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Planet Node */}
      <group ref={nodeRef}>
        <mesh>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshBasicMaterial color="#5e6ad2" transparent opacity={0.15} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#1a1b2e"
            emissive="#5e6ad2"
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        
        <Html center zIndexRange={[100, 0]}>
          <div className="text-center w-24 pointer-events-none">
            <div className="w-14 h-14 max-[480px]:w-11 max-[480px]:h-11 mx-auto mb-1 bg-surface-dark border border-border rounded-lg flex items-center justify-center text-2xl max-[480px]:text-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_4px_30px_rgba(94,106,210,0.15)] pointer-events-auto">
              {emoji}
            </div>
            <span className="text-[0.8rem] text-text-muted font-medium block">{label}</span>
          </div>
        </Html>
      </group>
    </group>
  )
}

function Scene() {
  const { viewport } = useThree()
  const isMobile = viewport.width < 10
  const pivotX = isMobile ? 0 : viewport.width / 4

  const nodes = [
    { angle: 90, emoji: '🎧', label: 'Bluetooth', radius: 4.5, speed: -0.15, inclination: 0.1 },
    { angle: 162, emoji: '🔊', label: 'Speaker', radius: 6.5, speed: -0.12, inclination: -0.15 },
    { angle: 234, emoji: '🎵', label: 'USB DAC', radius: 8.5, speed: -0.09, inclination: 0.05 },
    { angle: 306, emoji: '🎤', label: 'Monitor', radius: 10.5, speed: -0.07, inclination: -0.05 },
    { angle: 18, emoji: '🎶', label: 'Wired', radius: 12.5, speed: -0.05, inclination: 0.2 },
  ]

  const groupRef = useRef()
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05
      groupRef.current.rotation.x = 0.25 // subtle global tilt
    }
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#5e6ad2" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#8b5cf6" />

      <group ref={groupRef} position={[pivotX, 0, 0]}>
        {/* Sun / Logo */}
        <Html center zIndexRange={[100, 0]}>
          <div className="w-[130px] h-[130px] max-lg:w-[100px] max-lg:h-[100px] max-[480px]:w-[80px] max-[480px]:h-[80px] pointer-events-none flex items-center justify-center rounded-full bg-surface-dark border border-primary/30 shadow-[0_0_30px_rgba(94,106,210,0.2)] animate-[pulse-dot_3s_ease-in-out_infinite]">
            <img 
              src={logo} 
              alt="SyncWave Logo" 
              className="w-[55%] h-[55%] object-contain filter drop-shadow-[0_0_15px_rgba(94,106,210,0.8)]" 
            />
          </div>
        </Html>

        {nodes.map((node) => (
          <PlanetSystem key={node.angle} {...node} />
        ))}
      </group>
    </>
  )
}

export default function HeroVisual3D() {
  return (
    <div className="w-full h-full min-h-[380px]">
      <Canvas
        camera={{ position: [0, 4, 10], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
