"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ScalesOfJustice } from "./assets/ScalesOfJustice";
import * as THREE from "three";

function SceneContent() {
    const scroll = useScroll();
    const scalesRef = useRef<THREE.Group>(null);

    useFrame(() => {
        const r1 = scroll.range(0, 1 / 3); 
        if (scalesRef.current) {
            // Fade out/Move up as user scrolls past hero
            scalesRef.current.position.y = THREE.MathUtils.lerp(0, 5, r1);
            scalesRef.current.rotation.y = r1 * Math.PI;
        }
    });

    return (
        <>
            <group position={[2, -1.5, 0]} rotation={[0, -0.5, 0]} ref={scalesRef}>
                <ScalesOfJustice />
            </group>

            {/* Ambient Particles */}
            <mesh position={[0, 0, -2]}>
                <planeGeometry args={[15, 15]} />
                <meshBasicMaterial color="#020617" transparent opacity={0.5} />
            </mesh>
        </>
    )
}

export default function GlobalScene({ children }: { children?: React.ReactNode }) {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-navy-950">
            <Canvas
                shadows
                camera={{ position: [0, 0, 8], fov: 40 }}
                gl={{ alpha: false, antialias: true, toneMappingExposure: 1.2 }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 5]} angle={0.3} penumbra={1} intensity={2} castShadow color="#F8FAFC" />
                    <pointLight position={[-5, -5, -5]} intensity={1} color="#D4AF37" />
                    <Environment preset="city" blur={0.7} />

                    <ScrollControls pages={4} damping={0.3}>
                        <SceneContent />
                        <Scroll html style={{ width: "100%" }}>
                            {children}
                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    );
}
