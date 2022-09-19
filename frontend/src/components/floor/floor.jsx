import { usePlane } from '@react-three/cannon';
import { MeshReflectorMaterial } from '@react-three/drei';
import React from 'react';
import variables from '../../assets/styles/scss/abstracts/variables.module.scss';

/**
 * defines the Floor 
 */
export const Floor = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[300, 300]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        color={variables.darkest}
        metalness={0.5}
      />
    </mesh>
  );
};
