import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/minecraft_chest.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" rotation={[Math.PI / 2, Math.PI, 0]} scale={0.5} position={[0, -0.5, 0]}>
        <group name="Sketchfab_model">
          <group name="chestfbx">
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Chest_0_A"
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  scale={1}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <group name="Object_11" scale={1} />
                  </group>
                </group>
                <group name="Chest_0" scale={1} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/minecraft_chest.glb')