import React, { useRef } from 'react';
import { Text } from '@react-three/drei';
import variables from '../../assets/styles/scss/abstracts/variables.module.scss';

/**
 * creates box which displays the year -> timeline
 */
export const Year = ({ year, positionZ, ...props }) => {
  const mesh = useRef();

  return (
    <group>
      <mesh
        {...props}
        ref={mesh}
        scale={1}>
        <boxGeometry args={[1, 1, 0.3]} />
        <meshStandardMaterial color={variables.accentDark} />
      </mesh>
      <Text maxWidth={1.8} anchorX="center" anchorY="middle" position={[-3, 0.52, positionZ]} fontSize={0.2} rotation={[4.7, 0, 0]}>
        {year}
      </Text>
      <Text maxWidth={1.8} anchorX="center" anchorY="middle" position={[-3, 0.3, positionZ + 0.2]} fontSize={0.2} rotation={[0, 0, 0]}>
        {year}
      </Text>
    </group>
  );
};