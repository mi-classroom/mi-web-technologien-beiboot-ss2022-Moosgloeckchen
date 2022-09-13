
import Data from './../../data/cda-paintings-2022-04-22.de.json';

/**
 * gets the data and filters for masterpieces
 */
export async function getData(setPaintingsBestOf) {
  const masterpieces = Data.items;
  const piecesBestOf = masterpieces.filter((painting) => {
    return painting.isBestOf;
  });
  setPaintingsBestOf(piecesBestOf);
}

/**
 * takes a painting
 * and returns the object of the first overall image 
 */

export const getOverallImage = (painting) => {
  return painting.images.overall.images[0];
};

/**
 * takes painting
 * and returns ratio
 */

export const getRatio = (painting) => {
  return getOverallImage(painting).sizes.medium
    ? getOverallImage(painting).sizes.medium.dimensions.width /
    getOverallImage(painting).sizes.medium.dimensions.height
    : 1;
};

/**
 * takes the inventoryNumber
 * and opens the painting in the cranach archive
 */

export const openArchive = (paintingInventoryNumber) => {
  document.getElementById('preview-imageTag')?.removeAttribute('src');
  window.open(`https://lucascranach.org/de/${paintingInventoryNumber}/`, '_blank');
};

export const getLinkToArchive = (paintingInventoryNumber) => {
  return `https://lucascranach.org/de/${paintingInventoryNumber}/`;
};