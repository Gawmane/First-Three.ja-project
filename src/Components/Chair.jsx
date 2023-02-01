/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/Models/chair.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useCustomization } from '../Context/Customization'

function Chair(props) {
  const { material, legs, chairColor, cushionColor } = useCustomization();
  const { nodes, materials } = useGLTF('./Models/chair.gltf')

  const leatherTextureProps = useTexture({
    // map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./Textures/Leather/Leather_008_Normal.jpg",
    roughnessMap: "./Textures/Leather/Leather_008_Roughness.jpg",
    aoMap: "./Textures/Leather/Leather_008_Ambient Occlusion.jpg",
  });

  const fabricTextureProps = useTexture({
    // map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "./Textures/Fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "./Textures/Fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "./Textures/Fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} castShadow>
        <meshStandardMaterial {...(material === "leather"
          ? leatherTextureProps
          : fabricTextureProps)}
          color={chairColor.color} />
      </mesh>

      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.06, 0.04]} castShadow>
        <meshStandardMaterial {...fabricTextureProps} color={cushionColor.color} />
      </mesh>

      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} visible={legs === 1} castShadow />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={legs === 2} castShadow />
    </group>
  );
}
export default Chair;
useGLTF.preload('./Models/chair.gltf')
