import React, { Suspense, useEffect, useRef, useState } from 'react';
import Data from "./../data/cda-paintings-2022-04-22.de.json";

import * as THREE from 'three'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { softShadows, BakeShadows, RoundedBox, Environment, TransformControls, useCursor, MeshReflectorMaterial, Image, Text, CubeCamera, useGLTF, useBoxProjectedEnv } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import CameraControls from 'camera-controls'
import getUuid from 'uuid-by-string'
import { mergeSort } from './helpers/sorting.helper';

const GOLDENRATIO = 1.61803398875

const App = ({images}) => {

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

  const getPaintingsPreview = paintings.map((painting, i) =>  {
      const maxDimensions = painting.images.overall.infos.maxDimensions;
      const fixWidth = 70;
      const paintingWidth = maxDimensions.width;
      const paintingHeight = maxDimensions.height;
      const ratio = (paintingHeight / paintingWidth)
      const fixHeight = ratio * fixWidth;

      return (
        <Frames key={i} images={painting.images.overall.images[0].sizes.medium.src} />
      )
  })

  return (
    <Canvas shadows camera={{ position: [20, 15, 50], fov: (42, 0.05) }}>
      <color attach="background" args={['#a2b9e7']} />
      <directionalLight position={[0, 8, 5]} castShadow intensity={1} shadow-camera-far={70} />
      <Suspense fallback={null}>
        <group position={[0, -0.9, -3]}>
          {/* <Plane color="hotpink" rotation-x={-Math.PI / 2} position-z={2} scale={[4, 40, 0.2]} /> */}
          <Frames images={images} />
          
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[50, 50]} />
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
        <Environment preset="city" />
        <BakeShadows />
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

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.025)
    state.camera.quaternion.slerp(q, 0.025)
  })
  
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const image = useRef()
  const frame = useRef()
  const name = getUuid(url)
  useCursor(hovered)
  useFrame((state) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, 0.85 * (hovered ? 0.85 : 1), 0.1)
    image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y, 0.9 * (hovered ? 0.905 : 1), 0.1)
    frame.current.material.color.lerp(c.set(hovered ? 'orange' : 'white'), 0.1)
  })
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
        {name.split('-').join(' ')}
      </Text>
    </group>
  )
}

export default App;