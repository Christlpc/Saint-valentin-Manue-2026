import React from 'react'
import { Environment } from '@react-three/drei'

export default function SkyBackground() {
    return (
        <>
            <color attach="background" args={['#ffafbd']} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} castShadow />
            <directionalLight position={[-5, 5, 5]} intensity={0.5} castShadow />
        </>
    )
}
