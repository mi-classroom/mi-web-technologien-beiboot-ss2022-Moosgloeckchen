import { A11y } from "@react-three/a11y";
import { Image, Text } from "@react-three/drei";
import React, { useRef } from "react";
import { getLinkToArchive, getOverallImage, getRatio, openArchive } from "../../helpers/utils.helper";
import { useProxy } from "../../hooks/useProxy";


/**
 * takes dimensions
 * creates box for image (backside of an image is transparent)
 * creates image with description text
 */
export const Frame = ({
  url,
  maxDimensions,
  title,
  artist,
  date,
  owner,
  ratio,
  sortingNumber,
  id,
  inventoryNumber,
  painting,
  paintings,
  setPreviewUrl,
  ...props
}) => {

  const image = useRef()
  const frame = useRef()
  const text = useRef()
  const smallImage = useRef()
  const smallImageFrame = useRef()

  const descriptionString = `Titel: ${title} \nKünstler: ${artist} \nDatum: ${date} \nBesitzer: ${owner}`;
  const paintingHeight = (maxDimensions.height / 500) / 10;
  const width = paintingHeight * ratio;

  /**
   * loop through the references of the painting
   * and push all relatedPaintings (with the condition isBestOf=true) into relatedPaintings
   */
  const relatedPaintings = [];
  painting.references.forEach(reference => {
    const relatedPainting = paintings.find(painting => {
      if (painting.isBestOf) {
        if (reference.inventoryNumber === painting.inventoryNumber) {
          return painting;
        }
        return null;
      }
    })
    if (relatedPainting) {
      relatedPaintings.push(relatedPainting);
    }
  })

  /**
   * create DOM elements for all relatedPaintings
   */
  const relatedPaintingsList = relatedPaintings.map((painting, i) => {
    const relatedPaintingRatio = getRatio(painting);
    const itemHeight = (painting.images.overall.infos.maxDimensions.height / 500) / 10;
    const itemWidth = itemHeight * relatedPaintingRatio;
    const positionZ = i * 0.4 + 1;

    return (
      <group>
        <mesh
          key={`related-${painting.objectId}${i}`}
          ref={smallImageFrame}
          position={[0, 1, positionZ]}
          rotation={[4.9, 0, 0]}
        >
          <A11y
            role="link"
            description={`Verwandtes Werk zu ${title}: ${painting.metadata.title}`}
            href={getLinkToArchive(painting.inventoryNumber)}
            actionCall={() => openArchive(painting.inventoryNumber)}
            focusCall={() => handleOnFocusLink(painting.inventoryNumber)}
          >
            <Image
              ref={smallImage}
              scale={[itemWidth * 0.3, itemHeight * 0.3, 1]}
              url={useProxy(getOverallImage(painting).sizes.medium?.src)}
            />
          </A11y>
        </mesh>
      </group>
    )
  })

  const handleOnFocusLink = (inventoryNumber) => {
    const paintingUrl = paintings.find(painting => {
      if (painting.inventoryNumber === inventoryNumber) {
        return painting;
      }
    })
    setPreviewUrl(useProxy(getOverallImage(paintingUrl).sizes.medium?.src))
  }

  return (
    <group>
      <group {...props}>
        <mesh
          key={sortingNumber}
          ref={frame}
          scale={[width, paintingHeight, 0.03]}
          position={[0, 2, 0.28]}
        >
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
        <A11y
          role="content"
          description={title}
          tabIndex={0}
        >
          <Image
            ref={image}
            position={[0, 2, 0.3]}
            scale={[width, paintingHeight, 1]}
            url={url}
          />
        </A11y>
        <mesh
          ref={text}
          position={[0, 1, 0.5]}
          rotation={[5, 0, 0]}
        >
          <A11y
            role="link"
            description={descriptionString}
            href={getLinkToArchive(inventoryNumber)}
            actionCall={() => openArchive(inventoryNumber)}
            focusCall={() => handleOnFocusLink(inventoryNumber)}
          >
            <Text
              maxWidth={0.8}
              anchorX="center"
              anchorY="middle"
              fontSize={0.03}
            >
              {descriptionString}
            </Text>
          </A11y>
        </mesh>
        <group>
        {relatedPaintingsList.length &&
          <mesh
            position={[0, 1, 0.7]}
            rotation={[5, 0, 0]}
          >
            <Text
              maxWidth={0.8}
              anchorX="center"
              anchorY="middle"
              fontSize={0.03}
            >
              Verwandte Werke
            </Text>
          </mesh>}
          {relatedPaintingsList}
        </group>
      </group>
    </group>
  )
}
