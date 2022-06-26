import React from 'react';
import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useControls } from '../../hooks/useControls';

/**
 * defines usable keys to interact with the environment
 */
const keyboardKeys = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
};

/** 
 * creates a sphere with mass and position
 * ties mesh to the reference so that it will be affected by gravity
 * use useControls to identify movement
 * access camera
 * useFrame -> calls you back every frame (useful for updating controls)
 * use the api to interact with the object (apply positions, rotations, velocities,...)
 * calculates direction (Vectors) and moves the camera and therefore the viewport to the identified position
 */ 
export const Controler = () => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [0, 1, 40]
  }));

  const { moveForward, moveBackward, moveLeft, moveRight } = useControls(keyboardKeys);
  const { camera } = useThree();
  
  useFrame(() => {
    ref.current.getWorldPosition(camera.position);

    const vectorX = new THREE.Vector3()
      .set(Number(moveRight) - Number(moveLeft), 0, 0)
      .normalize()
      .multiplyScalar(5);

    const vectorZ = new THREE.Vector3()
      .set(0, 0, Number(moveBackward) - Number(moveForward))
      .normalize()
      .multiplyScalar(5);

    api.velocity.set(vectorX.x, 0, vectorZ.z);
  });

  return (
    <mesh ref={ref} />
  );
};
