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
 * calculates direction and moves the camera and therefore the viewport to the identified position
 */ 
export const Controller = () => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [0, 1, 62]
  }));

  const { moveForward, moveBackward, moveLeft, moveRight } = useControls(keyboardKeys);
  const { camera } = useThree();
  
  useFrame(() => {
    ref.current.getWorldPosition(camera.position);

    const vectorX = new THREE.Vector3()
      .set(Number(moveLeft) - Number(moveRight), 0, 0)

    const vectorZ = new THREE.Vector3()
      .set(0, 0, Number(moveBackward) - Number(moveForward))

    const direction = new THREE.Vector3()
      .subVectors(vectorZ, vectorX)
      .normalize()
      .multiplyScalar(5)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, 0, direction.z);
  });

  return (
    <mesh ref={ref} />
  );
};
