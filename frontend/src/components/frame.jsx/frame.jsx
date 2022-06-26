import { Image, Text } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from 'three'

export const Frame = ({ url, c = new THREE.Color(), ...props }) => {
  const image = useRef()
  const frame = useRef()

  const descriptionString = 'Titel: ' + props.title + '\n' + 'Künstler: ' + props.artist + '\n' + 'Datum: ' + props.date + '\n' + 'Besitzer: ' + props.owner;

  const maxDimensions = props.maxDimensions;
  const paintingWidth = (maxDimensions.width / 1000) / 10;
  const paintingHeight = (maxDimensions.height / 1000) / 10;
  const ratio = (paintingWidth / paintingHeight)
  const fixWidth = 1;

  return (
    <group>
      <group {...props}>
        <mesh
          name={props.title}
          scale={[paintingWidth, paintingHeight, 0.2]}
          position={[0, 1, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
          <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
            <boxGeometry />
            <meshBasicMaterial toneMapped={false} fog={false} />
          </mesh>
          <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
        </mesh>
        <Text maxWidth={0.8} anchorX="left" anchorY="top" position={[0.55, 1, 0]} fontSize={0.025}>
          {descriptionString}
        </Text>
      </group>
    </group>
  )
}
