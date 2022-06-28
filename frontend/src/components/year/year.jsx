import React, { useRef } from "react";
import { Text } from "@react-three/drei"

/**
 * creates box which displays the year -> timeline
 */
export const Year = (props) => {
  const mesh = useRef()

  return (
    <group>
      <mesh
        {...props}
        ref={mesh}
        scale={1}>
        <boxGeometry args={[1, 1, 0.3]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
      <Text maxWidth={1.8} anchorX="center" anchorY="middle" position={[-2, 0.52, props.positionZ]} fontSize={0.2} rotation={[4.7, 0, 0]}>
        {props.year}
      </Text>
      <Text maxWidth={1.8} anchorX="center" anchorY="middle" position={[-2, 0.3, props.positionZ + 0.2]} fontSize={0.2} rotation={[0, 0, 0]}>
        {props.year}
      </Text>
    </group>
  )
}