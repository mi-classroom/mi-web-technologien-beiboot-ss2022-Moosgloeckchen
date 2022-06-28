import { Image, Text } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from 'three'

/**
 * takes dimensions
 * creates painting with description text 
 */
export const Frame = ({ url, height, ...props }) => {
  const image = useRef()
  const frame = useRef()

  const descriptionString = 'Titel: ' + props.title + '\n' + 'Künstler: ' + props.artist + '\n' + 'Datum: ' + props.date + '\n' + 'Besitzer: ' + props.owner;
  const maxDimensions = props.maxDimensions;
  const paintingHeight = (maxDimensions.height / 500) / 10;
  const ratio = props.ratio;
  const width = paintingHeight * ratio;
  
  return (
    <group>
      <group {...props}>
        <mesh ref={frame} scale={[width, paintingHeight, 0.03]} position={[0, 2, 0.28]}>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
        <Image ref={image} position={[0, 2, 0.3]} scale={[width, paintingHeight, 1]} url={url} />
        <Text maxWidth={0.8} anchorX="center" anchorY="middle" position={[0, 1, 0.5]} fontSize={0.03} rotation={[5, 0, 0]}>
          {descriptionString}
        </Text>
      </group>
    </group>
  )
}
