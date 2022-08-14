
import Data from "./../../data/cda-paintings-2022-04-22.de.json";

/**
 * gets the data and filters for masterpieces
 */
export async function getData(setpaintingsBestOf) {
  const masterpieces = Data.items;
  const piecesBestOf = masterpieces.filter((painting) => {
    return painting.isBestOf;
  })
  setpaintingsBestOf(piecesBestOf);
}

/**
 * takes a painting
 * and returns the object of the first overall image 
 */

export const getOverallImage = (painting) => {
  return painting.images.overall.images[0];
}