import { Image, Text } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from 'three'

/**
 * takes dimensions
 * creates box for image (backside of an image is transparent)
 * creates image with description text 
 */
export const Frame = ({ url, maxDimensions, title, artist, date, owner, ratio, ...props }) => {
  const image = useRef()
  const frame = useRef()

  const descriptionString = 'Titel: ' + title + '\n' + 'Künstler: ' + artist + '\n' + 'Datum: ' + date + '\n' + 'Besitzer: ' + owner;
  const paintingHeight = (maxDimensions.height / 500) / 10;
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
