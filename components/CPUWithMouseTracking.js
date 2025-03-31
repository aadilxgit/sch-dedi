"use client";
import { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { CPUModel } from "./Cpu3d";
import { OrbitControls } from "@react-three/drei";

export default function CPUWithMouseTracking() {
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group>
            <OrbitControls 
                enableZoom={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
            />
            <group rotation={[Math.PI / 6, Math.PI / 4, 0]}>
                <group scale={[100, 100, 100]}>
                    <CPUModel 
                    ref={modelRef} 
                    />
                    
                </group>
            </group>
        </group>
    );
}