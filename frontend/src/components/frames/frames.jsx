import React from "react";
import { getOverallImage, getRatio } from "../../helpers/utils.helper";
import { useProxy } from "../../hooks/useProxy";
import { Frame } from "../frame/frame";
import { Year } from "../year/year";

/**
 * takes groupes
 * maps grouped paintings
 * uses proxy
 * measures the painting ratio
 * adds years and paintings in the environment
 */
export const Frames = ({
  group,
  paintings
}) => {
  const getPaintings = group.map((painting, i) => {
    const positionZ = (painting.sortingInfo.year - 1525) * 1.8;
    const positionX = i * 4;

    const ratio = getRatio(painting);

    return (
      <group>
        <Year position={[-3, 0, positionZ]} year={painting.sortingInfo.year} positionZ={positionZ} />
        <Frame
          key={i}
          index={i}
          id={getOverallImage(painting).id}
          url={useProxy(getOverallImage(painting).sizes.medium?.src)}
          position={[positionX, 0, positionZ]}
          maxDimensions={painting.images.overall.infos.maxDimensions}
          title={painting.metadata.title}
          artist={painting.involvedPersons[0].name}
          date={getOverallImage(painting).metadata.date}
          owner={painting.repository}
          ratio={ratio}
          inventoryNumber={painting.inventoryNumber}
          painting={painting}
          paintings={paintings}
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