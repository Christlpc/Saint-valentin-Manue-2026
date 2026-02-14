import React, { useMemo } from 'react'
import { useSphere } from '@react-three/cannon'
import * as THREE from 'three'

export default function FloatingHeart({ position }) {
    const [ref] = useSphere(() => ({
        mass: 1,
        position,
        velocity: [(Math.random() - 0.5) * 3, 4 + Math.random() * 2, (Math.random() - 0.5) * 3],
        args: [0.2],
        material: { friction: 0.2, restitution: 0.6 }
    }))

    const heartShape = useMemo(() => {
        const shape = new THREE.Shape()
        const x = 0, y = 0
        // Draw heart shape
        shape.moveTo(x + 0.25, y + 0.25)
        shape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.20, y, x, y)
        shape.bezierCurveTo(x - 0.30, y, x - 0.30, y + 0.35, x - 0.30, y + 0.35)
        shape.bezierCurveTo(x - 0.30, y + 0.55, x - 0.10, y + 0.77, x + 0.25, y + 0.95)
        shape.bezierCurveTo(x + 0.60, y + 0.77, x + 0.80, y + 0.55, x + 0.80, y + 0.35)
        shape.bezierCurveTo(x + 0.80, y + 0.35, x + 0.80, y, x + 0.50, y)
        shape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25)
        return shape
    }, [])

    return (
        <mesh ref={ref} castShadow scale={0.4}>
            <extrudeGeometry args={[heartShape, { depth: 0.2, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.02, bevelThickness: 0.02 }]} />
            <meshPhysicalMaterial
                color="#ff4d6d"
                roughness={0.1}
                metalness={0.1}
                transmission={0.2}
                thickness={0.5}
                emissive="#ff0000"
                emissiveIntensity={0.2}
            />
        </mesh>
    )
}
