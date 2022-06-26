import React, { useEffect, useState } from 'react';
import Data from "./../data/cda-paintings-2022-04-22.de.json";
import { Canvas } from '@react-three/fiber';
import { mergeSort } from './helpers/sorting.helper';
import { Controler } from './components/controler/controler';
import { Physics } from '@react-three/cannon';
import { Frames } from './components/frames/frames';
import { Floor } from './components/floor/floor';

const App = () => {
  const masterpieces = Data.items;
  const [bestOf, setpaintingsBestOf] = useState(null)

  /**
   * gets the data and filters for masterpieces
   */
  useEffect(() => {
    async function getData() {
      const piecesBestOf = masterpieces.filter((painting) => {
        return painting.isBestOf;
      })
      setpaintingsBestOf(piecesBestOf);
    }
    getData();
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
    * adds frames, floor and controler
    */
  return (
    <Canvas shadows camera={{ fov: (65) }}>
      <color attach="background" args={['#a2b9e7']} />
      <directionalLight position={[0, 8, 5]} castShadow intensity={1} shadow-camera-far={70} />
      <Physics>
        <group position={[0, -0.9, -3]}>
          {Object.entries(groupPaintings(paintings)).map(([year, group, i]) => (
            <Frames key={i} paintings={paintings} group={group}/>
          ))}
          <Floor />
        </group>
        <Controler />
      </Physics>
    </Canvas>
  )
}

export default App;