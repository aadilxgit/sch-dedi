"use client";
import { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { CPUModel } from "./CPUamd";  
import { OrbitControls } from "@react-three/drei";

export default function CPUWithMouseTracking() {
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.02;
        }
    });

    return (
        <group>
            <OrbitControls 
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
                enableRotate={true}
                rotateSpeed={0.5}
                dampingFactor={0.1}
                enableDamping={true}
            />
            <group rotation={[12, 0, 0]}>
                <group scale={[8.5, 8.5, 8.5]}>  
                    <CPUModel 
                        ref={modelRef}
                    />
                </group>
            </group>
        </group>
    );
}