import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/rusty_one.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.803, 0.022, Math.PI/6]}>  {/* Added Math.PI/6 (30 degrees) to Z rotation */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DefaultMaterial}
          rotation={[Math.PI / 3, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/rusty_one.glb')