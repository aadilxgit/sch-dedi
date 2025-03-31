"use client";
import { useRef, useState, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import { Model } from "./Server3d.js";

export default function ModelWithMouseTracking() {
    const modelRef = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: ((event.clientY / window.innerHeight) * 2 - 1)
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += (mousePosition.x * 0.5 - modelRef.current.rotation.y) * 0.1;
            modelRef.current.rotation.x += (mousePosition.y * 0.5 - modelRef.current.rotation.x) * 0.1;
        }
    });

    return (
        <group ref={modelRef} scale={[2.5, 2.5, 2.5]}>
            <Model />
        </group>
    );
}