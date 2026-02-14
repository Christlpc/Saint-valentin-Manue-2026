import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCylinder } from '@react-three/cannon'

export default function Island(props) {
    const meshRef = useRef()

    // Physics collider (invisible, static)
    const [ref] = useCylinder(() => ({
        mass: 0,
        position: [0, -1, 0],
        args: [3.5, 0.5, 3, 7],
        material: { friction: 1, restitution: 0 }
    }))

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(t * 0.5) * 0.1 - 1
            meshRef.current.rotation.y = Math.sin(t * 0.1) * 0.05
        }
    })

    return (
        <group {...props}>
            <mesh ref={meshRef} receiveShadow position={[0, -1, 0]}>
                <cylinderGeometry args={[3.5, 0.5, 3, 7]} />
                <meshStandardMaterial color="#95d5b2" roughness={1} flatShading />
            </mesh>

            <mesh ref={ref} visible={false}>
                <cylinderGeometry args={[3.5, 0.5, 3, 7]} />
            </mesh>
        </group>
    )
}
