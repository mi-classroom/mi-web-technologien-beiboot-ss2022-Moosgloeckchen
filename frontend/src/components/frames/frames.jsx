import React from "react";
import { getOverallImage } from "../../helpers/utils.helper";
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
  focusedPainting,
  setFocusedPainting
}) => {
  const getPaintings = group.map((painting, i) => {
    const positionZ = (painting.sortingInfo.year - 1525) * 1.5;
    const positionX = i * 2.1;

    const ratio = getOverallImage(painting).sizes.medium
      ? getOverallImage(painting).sizes.medium.dimensions.width /
        getOverallImage(painting).sizes.medium.dimensions.height
      : 1

    return (
      <group>
        <Year position={[-2, 0, positionZ]} year={painting.sortingInfo.year} positionZ={positionZ} />
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
          focusedPainting={focusedPainting}
          setFocusedPainting={setFocusedPainting}
          inventoryNumber={painting.inventoryNumber}
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