import React, { useRef, useState } from 'react'
import { CameraControls, Text } from '@react-three/drei'
import * as THREE from 'three'

export default function LoveLetter() {
    const controlsRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const [hovered, setHover] = useState(false)

    const handleOpen = (e) => {
        e.stopPropagation()
        setIsOpen(true)
        // Zoom in to read
        controlsRef.current?.setLookAt(
            0, 1, 3, // Camera position
            2, 0, 2, // Target (look at the letter position roughly)
            true // Animate
        )
    }

    const handleClose = (e) => {
        e.stopPropagation()
        setIsOpen(false)
        // Reset view
        controlsRef.current?.setLookAt(0, 2, 9, 0, 0, 0, true)
    }

    return (
        <>
            <CameraControls
                ref={controlsRef}
                makeDefault
                minDistance={2}
                maxDistance={15}
                maxPolarAngle={Math.PI / 2 - 0.1}
            />

            {/* Positioned on the island surface */}
            <group position={[2, -0.8, 1.5]} rotation={[0, -Math.PI / 4, 0]}>

                {/* The Scroll Object */}
                <group
                    onClick={isOpen ? null : handleOpen}
                    onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer' }}
                    onPointerOut={() => { setHover(false); document.body.style.cursor = 'default' }}
                    scale={hovered && !isOpen ? 1.1 : 1}
                >
                    {/* Scroll body - stylized cylinder/paper roll */}
                    <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
                        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
                        <meshStandardMaterial color="#f5f5dc" />
                    </mesh>
                    <mesh position={[0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
                        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
                        <meshStandardMaterial color="#f5f5dc" />
                    </mesh>

                    {/* Label when closed */}
                    {!isOpen && (
                        <Text position={[0.15, 0.2, 0]} fontSize={0.1} color="white" anchorX="center" outlineWidth={0.01} outlineColor="#5d4037">
                            Message
                        </Text>
                    )}
                </group>

                {/* Expanded Letter */}
                {isOpen && (
                    <group position={[0.15, 1, 0]} onClick={handleClose}>
                        <mesh>
                            <planeGeometry args={[1.5, 2]} />
                            <meshStandardMaterial color="#fff5e6" side={THREE.DoubleSide} />
                        </mesh>
                        <Text position={[0, 0.8, 0.01]} fontSize={0.12} color="#5e3023" maxWidth={1.3} textAlign="center" anchorY="top" font="https://fonts.gstatic.com/s/dancingscript/v24/If2rxTr6YS-zF4S-kcSWSVi_8w.woff">
                            "Joyeuse Saint-Valentin"
                        </Text>
                        <Text position={[0, 0, 0.01]} fontSize={0.08} color="#5e3023" maxWidth={1.3} textAlign="center">
                            Chaque moment avec toi est précieux. {'\n'}
                            Tu es mon cœur et mon âme.
                        </Text>
                        <Text position={[0, -0.8, 0.01]} fontSize={0.08} color="#d81b60">
                            (Clique pour fermer)
                        </Text>
                    </group>
                )}
            </group>
        </>
    )
}
