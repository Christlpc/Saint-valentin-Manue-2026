import React, { useState } from 'react'
import FloatingHeart from './FloatingHeart'
import { Cylinder, Sphere } from '@react-three/drei'

export default function Bouquet(props) {
    const [hearts, setHearts] = useState([])

    const emitHeart = (e) => {
        e.stopPropagation()
        // Add hearts
        const newHearts = Array.from({ length: 3 }).map(() => ({
            id: Date.now() + Math.random(),
            position: [0, 2.5, 0] // Spawn above the bouquet
        }))
        setHearts(prev => [...prev, ...newHearts])
    }

    return (
        <group {...props}>
            <group onClick={emitHeart} onPointerOver={() => document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'default'}>
                {/* Vase/Stem - stylized bunch of stems */}
                <Cylinder args={[0.15, 0.05, 1.5, 8]} position={[0, 0.75, 0]} castShadow receiveShadow>
                    <meshStandardMaterial color="#4caf50" />
                </Cylinder>

                {/* Flowers */}
                <group position={[0, 1.5, 0]}>
                    {/* Center Rose */}
                    <Sphere args={[0.35, 16, 16]} position={[0, 0.1, 0]}>
                        <meshPhysicalMaterial color="#d81b60" roughness={0.4} clearcoat={0.5} clearcoatRoughness={0.1} />
                    </Sphere>
                    {/* Surrounding Tulips */}
                    <Sphere args={[0.25, 16, 16]} position={[-0.3, 0, 0.1]}>
                        <meshPhysicalMaterial color="#f48fb1" roughness={0.4} clearcoat={0.5} />
                    </Sphere>
                    <Sphere args={[0.25, 16, 16]} position={[0.3, 0, -0.1]}>
                        <meshPhysicalMaterial color="#ec407a" roughness={0.4} clearcoat={0.5} />
                    </Sphere>
                    <Sphere args={[0.25, 16, 16]} position={[0.1, 0.1, 0.3]}>
                        <meshPhysicalMaterial color="#ad1457" roughness={0.4} clearcoat={0.5} />
                    </Sphere>
                    <Sphere args={[0.25, 16, 16]} position={[-0.1, 0.1, -0.3]}>
                        <meshPhysicalMaterial color="#e91e63" roughness={0.4} clearcoat={0.5} />
                    </Sphere>
                </group>
            </group>

            {/* Physics Hearts */}
            {hearts.map(h => <FloatingHeart key={h.id} position={h.position} />)}
        </group>
    )
}
