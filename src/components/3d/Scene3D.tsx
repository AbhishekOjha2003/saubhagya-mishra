"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    Environment,
    Float,
    MeshTransmissionMaterial,
    Text3D,
    Center,
    Sparkles,
    useScroll,
    ScrollControls,
    Scroll
} from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

// Animated Floating Scales of Justice
function ScalesOfJustice() {
    const group = useRef<THREE.Group>(null);
    const leftPlate = useRef<THREE.Group>(null);
    const rightPlate = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!group.current) return;
        const t = state.clock.elapsedTime;

        // Gentle rotation of the entire assembly
        group.current.rotation.y = Math.sin(t * 0.2) * 0.1;

        // Removed vertical bounce to keep threads connected
    });

    const silverMaterial = useMemo(() => (
        <meshStandardMaterial
            color="#059669"
            metalness={0.85}
            roughness={0.15}
            envMapIntensity={2}
        />
    ), []);

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={group} scale={0.6}>
                {/* Central Pillar */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.08, 0.12, 3, 32]} />
                    {silverMaterial}
                </mesh>

                {/* Top Ornament */}
                <mesh position={[0, 2.2, 0]}>
                    <sphereGeometry args={[0.15, 32, 32]} />
                    {silverMaterial}
                </mesh>

                {/* Crossbeam */}
                <mesh position={[0, 1.8, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 3, 16]} />
                    {silverMaterial}
                </mesh>

                {/* Left Side - Chains connecting crossbeam to plate */}
                <group ref={leftPlate}>
                    {/* Main chain from crossbeam endpoint to plate center */}
                    {/* Crossbeam y=1.8, Plate y=0. Height=1.8, Center=0.9 */}
                    <mesh position={[-1.4, 0.9, 0]}>
                        <cylinderGeometry args={[0.01, 0.01, 1.8, 8]} />
                        {silverMaterial}
                    </mesh>

                    {/* Triangle Spreader at bottom to hold the plate */}
                    <mesh position={[-1.4, 0.4, 0]} rotation={[0, 0, 0.15]}>
                        <cylinderGeometry args={[0.01, 0.01, 0.9, 8]} />
                        {silverMaterial}
                    </mesh>
                    <mesh position={[-1.4, 0.4, 0]} rotation={[0, 0, -0.15]}>
                        <cylinderGeometry args={[0.01, 0.01, 0.9, 8]} />
                        {silverMaterial}
                    </mesh>

                    {/* Plate */}
                    <mesh position={[-1.4, 0, 0]}>
                        <cylinderGeometry args={[0.6, 0.5, 0.1, 32]} />
                        {silverMaterial}
                    </mesh>
                </group>

                {/* Right Side - Chains connecting crossbeam to plate */}
                <group ref={rightPlate}>
                    {/* Main chain */}
                    <mesh position={[1.4, 0.9, 0]}>
                        <cylinderGeometry args={[0.01, 0.01, 1.8, 8]} />
                        {silverMaterial}
                    </mesh>

                    {/* Triangle Spreader */}
                    <mesh position={[1.4, 0.4, 0]} rotation={[0, 0, -0.15]}>
                        <cylinderGeometry args={[0.01, 0.01, 0.9, 8]} />
                        {silverMaterial}
                    </mesh>
                    <mesh position={[1.4, 0.4, 0]} rotation={[0, 0, 0.15]}>
                        <cylinderGeometry args={[0.01, 0.01, 0.9, 8]} />
                        {silverMaterial}
                    </mesh>

                    {/* Plate */}
                    <mesh position={[1.4, 0, 0]}>
                        <cylinderGeometry args={[0.6, 0.5, 0.1, 32]} />
                        {silverMaterial}
                    </mesh>
                </group>

                {/* Base */}
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[0.6, 0.8, 0.15, 32]} />
                    {silverMaterial}
                </mesh>
            </group>
        </Float>
    );
}

// Floating Glass Orbs with Refraction
function GlassOrbs() {
    const orbs = useMemo(() =>
        Array.from({ length: 8 }, (_, i) => ({
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 5 - 3
            ] as [number, number, number],
            scale: 0.2 + Math.random() * 0.4
        }))
        , []);

    return (
        <>
            {orbs.map((orb, i) => (
                <Float key={i} speed={1 + i * 0.2} floatIntensity={0.5}>
                    <mesh position={orb.position} scale={orb.scale}>
                        <icosahedronGeometry args={[1, 3]} />
                        <MeshTransmissionMaterial
                            backside
                            samples={8}
                            thickness={0.5}
                            chromaticAberration={0.5}
                            anisotropy={0.3}
                            distortion={0.2}
                            distortionScale={0.3}
                            temporalDistortion={0.1}
                            iridescence={1}
                            iridescenceIOR={1}
                            iridescenceThicknessRange={[0, 1400]}
                        />
                    </mesh>
                </Float>
            ))}
        </>
    );
}

// Animated Particle Field
function ParticleField() {
    const particles = useRef<THREE.Points>(null);

    const { positions, colors } = useMemo(() => {
        const count = 2000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 30;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;

            // Emerald to teal gradient
            const teal = Math.random();
            colors[i * 3] = 0.0 + teal * 0.15;      // Low Red
            colors[i * 3 + 1] = 0.5 + teal * 0.3;   // Mid-High Green
            colors[i * 3 + 2] = 0.4 + teal * 0.3;   // Mid Blue
        }

        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (!particles.current) return;
        particles.current.rotation.y = state.clock.elapsedTime * 0.02;
        particles.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    });

    return (
        <points ref={particles}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

// Main Experience Component
function Experience() {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <spotLight
                position={[10, 10, 5]}
                angle={0.3}
                penumbra={1}
                intensity={2}
                color="#ffffff"
            />
            <pointLight position={[-5, 5, -5]} intensity={1} color="#059669" />
            <pointLight position={[5, -5, 5]} intensity={0.5} color="#34d399" />

            {/* Environment */}
            <Environment preset="city" blur={0.8} />

            {/* 3D Elements - Scales of Justice */}
            <group position={[2.5, -0.5, 0]} rotation={[0, -0.3, 0]}>
                <ScalesOfJustice />
            </group>

            {/* Removed GlassOrbs */}
            <ParticleField />

            {/* Emerald Sparkles */}
            <Sparkles
                count={100}
                scale={15}
                size={3}
                speed={0.3}
                color="#10b981"
                opacity={0.5}
            />
        </>
    );
}

export default function Scene3D() {
    return (
        <div className="fixed inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                }}
                dpr={[1, 2]}
            >
                <color attach="background" args={["#fafaf9"]} />
                <fog attach="fog" args={["#fafaf9", 10, 30]} />

                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    );
}
