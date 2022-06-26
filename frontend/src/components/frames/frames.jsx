import { Text } from "@react-three/drei";
import React, { useRef } from "react";
import { Frame } from "../frame.jsx/frame";
import { Year } from "../year/year";

export const Frames = ({ group }) => {
  const getPaintings = group.map((painting, i) => {
    const positionZ = painting.sortingInfo.year - 1525;
    const positionX = i * 2

    const useProxy = (text) => {
      const split = text.split('imageserver-2022/');
      return 'https://lucascranach.org/data-proxy/image.php?subpath=/' + split[1];
    };

    return (
      <group>
        <Year position={[-2, 0, positionZ]} year={painting.sortingInfo.year} positionZ={positionZ} />
        <Frame
          key={i} index={i}
          url={useProxy(painting.images.overall.images[0].sizes.medium.src)}
          year={painting.sortingInfo.year}
          position={[positionX, 0, positionZ]}
          rotation={[0, 0, 0]}
          maxDimensions={painting.images.overall.infos.maxDimensions}
          title={painting.metadata.title}
          artist={painting.involvedPersons[0].name}
          date={painting.images.overall.images[0].metadata.date}
          owner={painting.repository}
        />
      </group>
    )
  })

  return (
    <group>
      {getPaintings}
    </group>
  )
}