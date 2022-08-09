import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { mergeSort } from './helpers/sorting.helper';
import { Controller } from './components/controller/controller';
import { Physics } from '@react-three/cannon';
import { Frames } from './components/frames/frames';
import { Floor } from './components/floor/floor';
import { PointerLockControls } from '@react-three/drei';
import { getData } from './helpers/utils.helper';

const App = () => {
  const [bestOf, setpaintingsBestOf] = useState(null)
  
  useEffect(() => {
    getData(setpaintingsBestOf);
  }, [])

  const paintings = bestOf ? bestOf : [];
  mergeSort(paintings);

  /**
   *  group paintings for joint display  
   */
  const groupPaintings = (paintings) =>
    paintings.reduce((groups, painting) => {
      const group = groups[painting.sortingInfo.year] || [];
      group.push(painting);
      groups[painting.sortingInfo.year] = group;
      return groups;
    }, {});

  /**
    * creates Canvas to define three.js (fiber) scene
    * colors background
    * adds lighting for painting display
    * adds physics to place physics related ojects
    * adds frames, floor and controller
    * adds PinterLockControls for camera rotation
    */
  return (
    <Canvas shadows camera={{ fov: (65) }}>
      <color attach="background" args={['#a2b9e7']} />
      <directionalLight position={[0, 8, 5]} castShadow intensity={1} shadow-camera-far={70} />
      <Physics>
        <group position={[0, -0.9, -3]}>
          {Object.entries(groupPaintings(paintings)).map(([year, group, i]) => (
            <Frames key={year+i} paintings={paintings} group={group}/>
          ))}
          <Floor />
        </group>
        <Controller />
      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}

export default App;