"use client";
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CPUModel(props) {
    const { nodes, materials } = useGLTF('/cpuamd.glb')
    
    if (!nodes || !materials) {
        console.error('Model not loaded properly:', { nodes, materials });
        return null;
    }

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube128_phong1_0.geometry}
                material={materials.phong10}
            />
        </group>
    )
}

useGLTF.preload('/cpuamd.glb')