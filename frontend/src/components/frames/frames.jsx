import React from "react";
import { Frame } from "../frame/frame";
import { Year } from "../year/year";

/**
 * takes groupes
 * maps grouped paintings
 * uses proxy
 * measures the painting ratio
 * adds years and paintings in the environment
 */
export const Frames = ({ group }) => {
  const getPaintings = group.map((painting, i) => {
    const positionZ = (painting.sortingInfo.year - 1525) * 1.5;
    const positionX = i * 2.1;

    const useProxy = (text) => {
      const split = text.split('imageserver-2022/');
      return 'https://lucascranach.org/data-proxy/image.php?subpath=/' + split[1];
    };

    const ratio = painting.images.overall.images[0].sizes.medium
      ? painting.images.overall.images[0].sizes.medium.dimensions.width /
          painting.images.overall.images[0].sizes.medium.dimensions.height
      : 1

    return (
      <group>
        <Year position={[-2, 0, positionZ]} year={painting.sortingInfo.year} positionZ={positionZ} />
        <Frame
          key={i} index={i}
          url={useProxy(painting.images.overall.images[0].sizes.medium?.src)}
          year={painting.sortingInfo.year}
          position={[positionX, 0, positionZ]}
          rotation={[0, 0, 0]}
          maxDimensions={painting.images.overall.infos.maxDimensions}
          title={painting.metadata.title}
          artist={painting.involvedPersons[0].name}
          date={painting.images.overall.images[0].metadata.date}
          owner={painting.repository}
          width={painting.images.overall.images[0].sizes.medium?.dimensions.width}
          ratio={ratio}
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