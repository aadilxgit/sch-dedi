"use client";
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const CPUModel = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/cpu-amd.glb')
  
  return (
    <group {...props} ref={ref} dispose={null}>
      <group scale={[0.02, 0.00075, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['metal-ihs']}
        />
        <mesh 
          castShadow 
          receiveShadow 
          geometry={nodes.Cube_1.geometry} 
          material={materials.PCB} 
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Piny.geometry}
        material={materials.Piny}
        position={[0.0186082, -0.0021437, -0.0186888]}
        rotation={[0, 0, Math.PI]}
        scale={[0.6047874, 0.6259953, 0.6979613]}
      />
    </group>
  )
})

CPUModel.displayName = 'CPUModel'
useGLTF.preload('/cpu-amd.glb')

