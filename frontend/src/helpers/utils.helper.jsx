
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
