import React, { Suspense, useEffect, useRef, useState } from 'react';
import Data from "./../data/cda-paintings-2022-04-22.de.json";

import * as THREE from 'three'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { softShadows, BakeShadows, RoundedBox, Environment, TransformControls, MeshReflectorMaterial, Image, Text, CubeCamera, useGLTF, useBoxProjectedEnv } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import CameraControls from 'camera-controls'
import getUuid from 'uuid-by-string'
import { mergeSort } from './helpers/sorting.helper';

const GOLDENRATIO = 1.61803398875

const App = () => {

  const [isDetails, setisDetails] = useState(false)
  const [bestOf, setpaintingsBestOf] = useState(null)

  const masterpieces = Data.items;

  useEffect(() => {
    async function getData() {
      const piecesBestOf = masterpieces.filter((painting) => {
        return painting.isBestOf;
      })
      setpaintingsBestOf(piecesBestOf);
    }

    getData();

    return () => {
    }
  }, [])

  const paintings = bestOf ? bestOf : [];

  mergeSort(paintings);

  const groupPaintings = (paintings) =>
    paintings.reduce((groups, painting) => {
      const group = groups[painting.sortingInfo.year] || [];
      group.push(painting);
      groups[painting.sortingInfo.year] = group;
      return groups;
    }, {});

  return (
    <Canvas shadows camera={{ position: [20, 15, 50], fov: (42, 0.05) }}>
      <color attach="background" args={['#a2b9e7']} />
      <directionalLight position={[0, 8, 5]} castShadow intensity={1} shadow-camera-far={70} />
      <Suspense fallback={null}>
        <group position={[0, -0.9, -3]}>
          {/* <Plane color="hotpink" rotation-x={-Math.PI / 2} position-z={2} scale={[4, 40, 0.2]} /> */}
          {Object.entries(groupPaintings(paintings)).map(([year, group, i]) => (
            <Frames key={i} paintings={paintings} group={group}/>
          ))}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[40, 100]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
            />
          </mesh>
        </group>
        <Controls />
        <Zoom />
      </Suspense>
    </Canvas>
  )
}

function Zoom({ vec = new THREE.Vector3(0, 0, 100) }) {
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(0, 0, state.mouse.x * 10), 0.075)
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 22, 0.075)
    state.camera.lookAt(0, 0, 10)
    state.camera.updateProjectionMatrix()
  })
}

CameraControls.install({ THREE })
extend({ CameraControls })

function Controls() {
  const ref = useRef()
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  useFrame((state, delta) => ref.current.update(delta))
  return <cameraControls ref={ref} args={[camera, gl.domElement]} />
}

function Frames({ paintings, group}) {
  const getPaintings = group.map((painting, i) =>  {
    const positionZ = painting.sortingInfo.year-1525;
    const positionX = i * 2

    const useProxy = (text) => {
      const split = text.split('imageserver-2022/');
      return 'https://lucascranach.org/data-proxy/image.php?subpath=/' + split[1];
    };
    
    return (
      <Frame 
        key={i} index={i}
        url={useProxy(painting.images.overall.images[0].sizes.medium.src)}
        year={painting.sortingInfo.year}
        position={[positionX, 0, positionZ]}
        rotation= {[0, 0, 0]}
        maxDimensions={painting.images.overall.infos.maxDimensions}
        title={painting.metadata.title}
        artist={painting.involvedPersons[0].name}
        date={painting.images.overall.images[0].metadata.date}
        owner={painting.repository}
      />
    )
  })

  return (
    <group>
      {getPaintings}
    </group>
  )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef()
  const frame = useRef()

  const descriptionString = 'Titel: ' + props.title + '\n' + 'Künstler: ' + props.artist + '\n' + 'Datum: '+ props.date + '\n' + 'Besitzer: ' + props.owner;
  
  const maxDimensions = props.maxDimensions;
  const paintingWidth = maxDimensions.width;
  const paintingHeight = maxDimensions.height;
  const ratio = (paintingHeight / paintingWidth )
  const fixWidth = 1;

  return (
    <group>
      <group {...props}>
        <mesh
          name={props.title}
          scale={[1, ratio, 0.05]}
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

export default App;