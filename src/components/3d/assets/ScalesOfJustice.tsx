"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cylinder, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

export function ScalesOfJustice({ ...props }) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!group.current) return;
        // Gentle floating animation
        group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    });

    const GoldMaterial = <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />;
    const MarbleMaterial = <meshStandardMaterial color="#F8FAFC" roughness={0.1} />;

    return (
        <group ref={group} {...props}>
            {/* Central Pillar */}
            <Cylinder args={[0.05, 0.08, 4, 32]} position={[0, 2, 0]}>
                {GoldMaterial}
            </Cylinder>
            <Cylinder args={[0.15, 0.2, 0.2, 32]} position={[0, 4, 0]}>
                {GoldMaterial}
            </Cylinder>
            <Cylinder args={[0.3, 0.4, 0.1, 32]} position={[0, 0, 0]}>
                {MarbleMaterial}
            </Cylinder>

            {/* Cross Beam */}
            <group position={[0, 3.8, 0]}>
                <Cylinder args={[0.04, 0.04, 3.5, 32]} rotation={[0, 0, Math.PI / 2]}>
                    {GoldMaterial}
                </Cylinder>

                {/* Left Plate Assembly */}
                <PlateAssembly x={-1.75} material={GoldMaterial} />
                {/* Right Plate Assembly */}
                <PlateAssembly x={1.75} material={GoldMaterial} />
            </group>
        </group>
    );
}

function PlateAssembly({ x, material }: any) {
    const plateRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (!plateRef.current) return;
        // Sway
        plateRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5 + x) * 0.05;
    })

    return (
        <group position={[x, 0, 0]} ref={plateRef}>
            {/* Chains (Simple Lines) */}
            <Line points={[[0, 0, 0], [-0.5, -1.5, 0]]} color="#B5902B" lineWidth={1} transparent opacity={0.4} />
            <Line points={[[0, 0, 0], [0.5, -1.5, 0]]} color="#B5902B" lineWidth={1} transparent opacity={0.4} />
            <Line points={[[0, 0, 0], [0, -1.5, 0.5]]} color="#B5902B" lineWidth={1} transparent opacity={0.4} />

            {/* Plate */}
            <group position={[0, -1.5, 0]}>
                <Sphere args={[0.6, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} scale={[1, 0.3, 1]} rotation={[Math.PI, 0, 0]} >
                    {material}
                </Sphere>
            </group>
        </group>
    )
}
