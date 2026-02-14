import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Image, Text } from '@react-three/drei'

export default function Carousel({ radius = 4.5, count = 6 }) {
    const groupRef = useRef()

    useFrame((state, delta) => {
        // Continuous slow rotation
        groupRef.current.rotation.y += delta * 0.05
    })

    // Generate placeholder images
    const images = Array.from({ length: count }).map((_, i) => ({
        url: `https://picsum.photos/300/400?random=${i + 10}`,
        id: i
    }))

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {images.map((img, i) => {
                const angle = (i / count) * Math.PI * 2
                return (
                    <Frame
                        key={i}
                        url={img.url}
                        position={[Math.sin(angle) * radius, 1.5, Math.cos(angle) * radius]}
                        rotation={[0, angle, 0]}
                    />
                )
            })}
        </group>
    )
}

function Frame({ url, ...props }) {
    const [hovered, setHover] = useState(false)

    return (
        <group {...props}
            onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer' }}
            onPointerOut={() => { setHover(false); document.body.style.cursor = 'default' }}
        >
            <Image
                url={url}
                transparent
                scale={hovered ? [1.6, 2.1] : [1.5, 2]}
                opacity={hovered ? 1 : 0.9}
            />
            <Text position={[0, -1.2, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="top" outlineWidth={0.02} outlineColor="#5d4037">
                Souvenir {props.key}
            </Text>
            {/* Frame border */}
            <mesh position={[0, 0, -0.05]}>
                <boxGeometry args={[1.7, 2.2, 0.1]} />
                <meshStandardMaterial color="#d4af37" roughness={0.3} metalness={0.8} />
            </mesh>
        </group>
    )
}
